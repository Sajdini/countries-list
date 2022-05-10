import React from "react";

import Pagination from "./Pagination";
import Loading from "./Loading";
import { useSelector } from "react-redux";

import styled from "styled-components";

const List = React.memo(() => {
  const shownData = useSelector((state) => state.country.shownData);
  const isloaded = useSelector((state) => state.country.isloaded);
  const page = useSelector((state) => state.country.pageNumber);

  // THIS IS USED TO SLICE THE ARRAY FROM API RESPONSE INTO 10 ITEMS ARRAY(PAGE)//
  const listedData = shownData.slice((page - 1) * 10, page * 10);

  const countries = listedData.map((country, i) => {
    const { name, region, area } = country;
    return (
      <li key={i}>
        <h1>{name}</h1>
        <NestedList>
          <h2>{region}</h2>
          <p>
            Area: {area} km<sup>2</sup>
          </p>
        </NestedList>
      </li>
    );
  });

  if (!isloaded) {
    return <Loading />;
  } else {
    return (
      <>
        <ListContainer>
          <UnorderedList>{countries}</UnorderedList>
        </ListContainer>
        <Pagination />
      </>
    );
  }
});

export default List;

const ListContainer = styled.div`
  max-width: 100%;
  border-radius: 8px;
  padding: 3rem 0rem;
`;

const UnorderedList = styled.ul`
  margin: 0;
  list-style: none;
  padding-left: 0;
  color: #666;

  //  INITIAL RENDER FADE IN ANIMATION OF LIST ITEM
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  li {
    margin-bottom: 1rem;
    background-color: #8ce99a;
    padding: 1rem;
    border-radius: 8px;
    transition: all 0.3s;

    h1 {
      font-family: "Roboto";

      font-size: 2.4rem;
    }
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const NestedList = styled.ul`
  padding-left: 2rem;
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
`;
