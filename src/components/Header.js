import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Head>
      <Title>Countries list</Title>
    </Head>
  );
};

export default Header;

const Head = styled.div`
  margin: 1rem 0 2rem;
  max-width: 50%;
  padding: 0.2rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  padding: 0;
  font-weight: 900;
  color: #777;
  margin: 0;
`;
