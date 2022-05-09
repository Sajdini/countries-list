import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ReactComponent as ArrowRight } from "../arrow-right-solid.svg";
import { ReactComponent as ArrowLeft } from "../angles-left-solid.svg";
import { sliceActions } from "../store/country-slice";

const Pagination = React.memo(() => {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.country.pageNumber);
  const dataLength = Math.ceil(
    useSelector((state) => state.country.shownData).length / 10
  );

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();

      console.log(e.target[0].value);
      if (!e.target[0].value) return;
      else dispatch(sliceActions.jumpToPage({ number: e.target[0].value }));
    },
    [dispatch]
  );

  const previousPage = useCallback(
    (e) => {
      e.preventDefault();
      if (page === 1) return;
      else dispatch(sliceActions.decrement());
    },
    [page, dispatch]
  );

  const nextPage = useCallback(
    (e) => {
      e.preventDefault();
      if (page === dataLength) return;
      else dispatch(sliceActions.increment());
    },
    [page, dataLength, dispatch]
  );

  return (
    <PaginationSection>
      <PaginationContainer>
        <ArrowLeft onClick={previousPage} />
        <FormContainer dataLength={dataLength}>
          <PaginationForm onSubmit={submitHandler}>
            <Input type="number" placeholder={page} max={dataLength} />
            <SearchBtn>Search</SearchBtn>
          </PaginationForm>
        </FormContainer>
        <ArrowRight onClick={nextPage} />
      </PaginationContainer>
    </PaginationSection>
  );
});

export default Pagination;

const PaginationSection = styled.section`
  max-width: 100%;
  padding: 1rem;
  display: flex;
`;

const PaginationContainer = styled.div`
  justify-content: center;
  display: flex;

  gap: 2rem;
  max-width: 100%;
  flex-grow: 1;

  svg {
    max-width: 3rem;
    cursor: pointer;
    fill: #666;
    align-self: flex-start;
  }
`;

const FormContainer = styled.div`
  font-size: 2rem;
  font-weight: 400;
  font-family: sans-serif !important;
  position: relative;
  color: #555;

  //   THIS PSEUDO SERVES TO SHOW THE TOTAL NUMBER OF PAGES  RIGHT NEXT TO THE INPUT (input value /25)

  &::before {
    content: "/${(props) => props.dataLength}";
    position: absolute;
    z-index: -1;
    font: inherit;
    border-radius: 8px;
    transform: translate(5rem, 0.1rem);
  }

  // THIS PSEUDO IS THE WHITE BACKGROUND BEHIND THE INPUT ELEMENT.

  &::after {
    content: " ";
    padding: 1.5rem 50%;
    background-color: #fff;
    position: absolute;
    z-index: -2;
    border-radius: 8px;
    transform: translate(-0.05rem, -6.7rem);
    border: 0.3px solid #999;
  }

  &:hover {
    button {
      color: #fff;
      background-color: #888;
    }
  }
`;

const PaginationForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 10rem;
  justify-content: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  font: inherit;
  border: none;
  max-width: 50%;
  background-color: transparent;
  text-align: right;
  align-self: left;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

const SearchBtn = styled.button`
  display: block;
  max-width: 100%;
  border: none;
  padding: 0.8rem 0;
  background-color: transparent;
  box-shadow: inset 0 0 0 2px #999;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #444;

  &:active {
    transform: scale(0.9);
  }
`;
