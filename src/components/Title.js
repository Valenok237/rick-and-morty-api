import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
    text-align: center;
    font-size: 60px;
    margin-bottom: 70px;
`

const Title = ({children}) => {
    return ( 
        <StyledTitle>
            {children}
        </StyledTitle>
    );
}
 
export default Title;