import React from "react";
import { useState } from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";
import Characters from "./components/Characters";
import Modal from "./components/Modal";
import CharacterInfo from "./components/CharacterInfo";

const AppStyled = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 30px;
`

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [modalActive, setModalActive] = useState(false);

  const paginate = page => page !== '...' ? setCurrentPage(page) : page;

  return (
    <AppStyled>
      <Modal active={modalActive} setActive={setModalActive}>
        <CharacterInfo/>
      </Modal>
      <Title>
        Search for Rick and Morty characters
      </Title>
      <Filter page={currentPage} setPage={setCurrentPage} />
      <Characters setActive={setModalActive}/>
      <Pagination paginate={paginate} currentPage={currentPage}/>
    </AppStyled>
  );
}

export default App;
