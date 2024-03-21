import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CharacterItem = styled.div`
    display: flex;
    width: 664px;
    border: 2px #000 solid;
    border-radius: 10px;
    overflow: hidden;
    @media ${props => props.theme.media.phone} {
        flex-direction: column;
        align-items: center;
    }
`

const CharacterImage = styled.img`
    @media ${props => props.theme.media.phone} {
        width: 230px;
        height: 230px;
    }
`

const CharacterParams = styled.ul`
    font-size: 30px;
    padding: 10px 30px 10px 30px;
    @media ${props => props.theme.media.phone} {
        padding: 15px 20px;
        width: 230px;
    }
`

const CharacterParam = styled.li`
    font-size: 18px;
    margin-bottom: 10px;
    &:first-child{
        margin-top: 15px;
    }
    &:last-child{
        margin-bottom: 0px;
    }
`

const Loading = styled.div`
    width: 664px;
    padding: 30px 0;
    font-size: 20px;
    text-align: center;
`

const CharacterInfo = () => {
    const {data, loading} = useSelector(state => state.character);

    return ( 
        <CharacterItem>
            {loading ?
                <Loading>Loading...</Loading>
                :
                <>
                    <CharacterImage src={data.image}/>
                    <CharacterParams>
                        {data.name}
                        <CharacterParam>Gender: {data.gender}</CharacterParam>
                        <CharacterParam>Status: {data.status}</CharacterParam>
                        <CharacterParam>Species: {data.species}</CharacterParam>
                        <CharacterParam>Origin: {data.origin.name}</CharacterParam>
                        <CharacterParam>Location: {data.location.name}</CharacterParam>
                        {data.type &&
                            <CharacterParam>Type: {data.type}</CharacterParam>
                        }
                    </CharacterParams>
                </>
            }
        </CharacterItem>
    );
}
 
export default CharacterInfo;