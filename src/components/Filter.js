import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchCharacters } from "../store/charactersSlice";

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    @media ${props => props.theme.media.phone} {
        flex-direction: column;
        align-items: center;
    }
`

const Select = styled.select`
    width: 80px;
    margin-left: 10px;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 5px;
    @media ${props => props.theme.media.phone} {
        margin-left: 0px;
    }
    @media ${props => props.theme.media.phone} {
        width: 250px;
    }
`

const Option = styled.option`
`

const Input = styled.input`
    margin-left: 10px;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 5px;
    @media ${props => props.theme.media.phone} {
        width: 250px;
        margin-left: 0px;
    }
`

const Label = styled.label`
    font-size: 18px;
    @media ${props => props.theme.media.phone} {
        display: block;
        margin-bottom: 5px;
    }
`

const Button = styled.button`
    width: 80px;
    padding: 5px 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #fff;
    transition: .2s;
    &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #000;
    }
    @media ${props => props.theme.media.phone} {
        width: 250px;
    }
`

const Div = styled.div`
    @media ${props => props.theme.media.phone} {
        margin-bottom: 15px;
    }
`

const Filter = ({page, setPage}) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [species, setSpecies] = useState('');
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');

    const dispatch = useDispatch();
    
    const searchParams = useMemo(() => ({
        page, 
        name, 
        type, 
        species, 
        status, 
        gender
    }), [page, name, type, species, status, gender]); 

    useEffect(() => {
        dispatch(fetchCharacters(searchParams));
        window.scrollTo({
            top: 0,
            left: 0,
            
        });
    }, [page]);

    const onSearch = useCallback((event) => {
        event.preventDefault();
        if (page > 1) {
            setPage(1);
        } else {
            dispatch(fetchCharacters(searchParams));
        }
    }, [dispatch, name, type, species, status, gender]);

    return ( 
        <Form onSubmit={onSearch}>
            <Div>
                <Label>Name:</Label>
                <Input type="text" value={name} onChange={e => setName(e.target.value)} />
            </Div>
            <Div>
                <Label>Type:</Label>
                <Input type="text" value={type} onChange={e => setType(e.target.value)} />
            </Div>
            <Div>
                <Label>Species:</Label>
                <Input type="text" value={species} onChange={e => setSpecies(e.target.value)} />
            </Div>
            <Div>
                <Label>Status:</Label>
                <Select value={status} onChange={e => setStatus(e.target.value)}>
                    <Option value='default'>default</Option>
                    <Option value='alive'>alive</Option>
                    <Option value='dead'>dead</Option>
                    <Option value='unknown'>unknown</Option>
                </Select>
            </Div>
            <Div>
                <Label>Gender:</Label>
                <Select value={gender} onChange={e => setGender(e.target.value)}>
                    <Option value='default'>default</Option>
                    <Option value='male'>male</Option>
                    <Option value='female'>female</Option>
                    <Option value='genderless'>genderless</Option>
                    <Option value='unknown'>unknown</Option>
                </Select>
            </Div>
            <Button type="submit">Search</Button>
        </Form>
    );
}
 
export default Filter;