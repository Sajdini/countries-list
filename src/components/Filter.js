import React from "react";
import styled from "styled-components";

const FilterSection = () => {
  return (
    <>
      <BtnContainer>
        <Filter>
          <button>Filter by region</button>
          <BtnOutline>Filter by size</BtnOutline>
        </Filter>
        <Sort>
          <button>A/Z</button>
        </Sort>
      </BtnContainer>
    </>
  );
};

export default FilterSection;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Filter = styled.div`
  button {
    color: #666;
    background-color: #69db7c;
    border-style: none;
    margin-right: 1rem;
    padding: 1rem 2rem;
    border-radius: 9px;
    font-weight: 600;
    transition: all 0.3s;
    &:hover {
      background-color: transparent;
      box-shadow: inset 0 0 0 2px #555;
    }
  }
`;

const BtnOutline = styled.button`
  background-color: #fff !important;
  margin-top: 1rem;

  &:hover {
    background-color: transparent !important;
  }
`;

const Sort = styled.div`
  position: relative;
  button {
    padding: 1rem 0.8rem;
    border-style: none;
    background-color: transparent;
    font-weight: 900;
    color: #999;
    z-index: 10;
    transition: all 0.5s;
  }

  &::before {
    content: "";
    padding: 2rem;
    background-color: transparent;
    border: solid 1px #999;
    position: absolute;
    border-radius: 50%;

    z-index: -1;
    transition: all 0.3s;
  }

  &:hover {
    button {
      color: white;
    }

    &::before {
      border: none;
      background-color: #999;
    }
  }
`;
