import styled from "styled-components";
import React from "react";

const Header = () => {
  return (
    <Head>
      <Title>Countries list</Title>
    </Head>
  );
};

export default Header;

const Head = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  padding: 0;
  font-weight: 900;
  color: #777;
  margin: 0;
`;
