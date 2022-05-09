import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sliceActions } from "../store/country-slice";

import styled from "styled-components";

const FilterSection = () => {
  const dispatch = useDispatch();

  // USING  "data" TO LOOP THROUGH AND FIND LITHUANIA
  const data = useSelector((state) => state.country.data);
  const lithuania = data.find((country) => country.name === "Lithuania");

  // USING "sortedData" in order to toggle text from "A/Z" to "Z/A" to Sort button
  const sortedData = useSelector((state) => state.country.sortedData);

  // FILTERS AND RETURNS COUNTRIES IN OCEANIA
  const filterByRegion = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(sliceActions.filterDataByRegion({ region: "Oceania" }));
    },
    [dispatch]
  );

  //FILTERS AND RETURNS COUNTRIES WITH AREA SMALLER THAN LITHUANIA
  const filterByCountrySize = (e) => {
    e.preventDefault();
    dispatch(sliceActions.filterDataBySize({ area: lithuania.area }));
  };

  //CLEAR FILTERS
  const clearFilters = (e) => {
    e.preventDefault();
    dispatch(sliceActions.removeFilters());
  };

  //TOGGLES THE LIST ALPHABETICALLY
  const toggleSort = (e) => {
    e.preventDefault(e);
    dispatch(sliceActions.sortData());
  };

  let sortBtnText = !sortedData ? "A/Z" : "Z/A";

  return (
    <>
      <BtnContainer>
        <Filter>
          <FilterBtn onClick={filterByRegion}>Filter by region</FilterBtn>
          <FilterBtnOutline onClick={filterByCountrySize}>
            Filter by size
          </FilterBtnOutline>
          <ClearButton onClick={clearFilters}>Clear Filters</ClearButton>
        </Filter>
        <Sort>
          <button onClick={toggleSort}>{sortBtnText}</button>
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
  button {
    font-size: 1.4rem;
  }
`;

const Filter = styled.div`
  button {
    color: #666;
    border-style: none;
    margin-right: 1rem;
    padding: 1rem 2rem;
    border-radius: 9px;
    font-weight: 600;
    transition: all 0.3s;
    margin-top: 1rem;
    &:hover {
      background-color: transparent;
      box-shadow: inset 0 0 0 2px #555;
    }
  }
`;

const FilterBtn = styled.button`
  background-color: #69db7c;
  &:active {
    transform: scale(0.9);
  }
`;

const FilterBtnOutline = styled.button`
  background-color: #fff !important;
  &:hover {
    background-color: transparent !important;
  }
  &:active {
    transform: scale(0.9);
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

  &:active {
    &::before {
      transform: scale(0.8);
    }
  }
`;

const ClearButton = styled.button`
  background-color: #ddd !important;

  &:active {
    transform: scale(0.9);
  }
`;
