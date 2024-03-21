import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    opacity: ${(props) => props.active ? '1' : '0'};
    transition: 0.5s;
    pointer-events: ${(props) => props.active ? 'all' : 'none'};
`

const ModalContent = styled.div`
    padding: 20px;
    border-radius: 12px;
    background-color: white;
    transform: ${(props) => props.active ? 'scale(1)' : 'scale(0.5)'};
    transition: 0.4s all;
    @media ${props => props.theme.media.phone} {
        padding: 10px;
    }
`

const Modal = ({active, setActive, children}) => {
    return ( 
        <StyledModal active={active} onClick={() => setActive(false)}>
            <ModalContent active={active} onClick={e => e.stopPropagation()}>
                {children}
            </ModalContent>
        </StyledModal>
    );
}
 
export default Modal;