import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Character from "./Character";

const StyledCharacters = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
    @media ${props => props.theme.media.phone} {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Characters = ({setActive}) => {
    const data = useSelector(state => state.characters.data);

    return <StyledCharacters>
        {data.map(item => 
            <Character key={item.id} id={item.id} image={item.image} name={item.name} modalActive={setActive} />
        )}
    </StyledCharacters>;
}
 
export default Characters;