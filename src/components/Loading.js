import React from "react";
import styled from "styled-components";

// THIS IS A SPINNING "LOADING" ANIMATION 
const Loading = () => {
  return <Spinner></Spinner>;
};

export default Loading;

const Spinner = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: #333;
  animation: spinner 0.6s linear infinite;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
