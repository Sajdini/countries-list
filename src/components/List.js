import React from "react";
import styled from "styled-components";

const List = () => {
  return (
    <ListContainer>
      <UnorderedList>
        <li>
          <h1>Afghanistan</h1>
          <NestedList>
            <h2>Asia</h2>
            <p>652230.0</p>
            <p>false</p>
          </NestedList>
        </li>

        <li>
          <h1>Afghanistan</h1>
          <NestedList>
            <h2>Asia</h2>
            <p>652230.0</p>
            <p>false</p>
          </NestedList>
        </li>

        <li>
          <h1>Afghanistan</h1>
          <NestedList>
            <h2>Asia</h2>
            <p>652230.0</p>
            <p>false</p>
          </NestedList>
        </li>
      </UnorderedList>
    </ListContainer>
  );
};

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
  li {
    margin-bottom: 1rem;
    background-color: #8ce99a;
    padding: 1rem;
    border-radius: 8px;
    transition: all 0.3s;
    h1 {
      font-family: "Roboto";

      font-size: 2.8rem;
    }
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const NestedList = styled.ul`
  padding-left: 2rem;
  h2 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`;
