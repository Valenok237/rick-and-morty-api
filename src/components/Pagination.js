import React from "react";
import styled from "styled-components";
import { paginationRange } from "../utils";
import { useSelector } from "react-redux";

const StyledPagination = styled.ul`
    display: flex;
    justify-content: center;
    padding: 50px 0 30px 0;
`

const PageItem = styled.li`
`

const PageItemLink = styled.a`
    color: #000;
    display: inline-block;
    width: 26px;
    height: 28px;
    padding-top: 4px;
    text-align: center;
    margin-right: 5px;
    background-color: #fff;
    border: 1px solid #000;
    transition: .2s;
    &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #000;
    }
`

const Pagination = ({paginate, currentPage}) => {
    const pages = useSelector(state => state.characters.pages);

    const pageNumbers = [];

    for(let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }

    const numbers = paginationRange(pageNumbers, currentPage);

    return <StyledPagination>
        {numbers.map((item, index) =>
            <PageItem  key={index}>
                <PageItemLink href="#!" onClick={() => paginate(item)}>
                    {item}
                </PageItemLink>
            </PageItem>
        )}
    </StyledPagination>
}
 
export default Pagination;