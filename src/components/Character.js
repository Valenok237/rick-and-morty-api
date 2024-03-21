import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchCharacter } from "../store/characterSlice";

const CharacterItem = styled.div`
    justify-self: center;
    width: 300px;
    border: 2px #000 solid;
    border-radius: 10px;
    padding-botton: 20px;
    overflow: hidden;
`

const CharacterImage = styled.img`
    width: 300px;
    height: 300px;
`

const CharacterName = styled.h2`
    font-size: 30px;
    text-align: center;
    padding: 10px;
`

const Character = (props) => {

    const dispatch = useDispatch();

    const getCharacter = () => {
        dispatch(fetchCharacter(props.id));
        props.modalActive(true);
    };

    return ( 
        <CharacterItem onClick={getCharacter}>
            <CharacterImage src={props.image}/>
            <CharacterName>
                {props.name}
            </CharacterName>
        </CharacterItem>
    );
}
 
export default Character;