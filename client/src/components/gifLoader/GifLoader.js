import React from "react";
import styled from "styled-components";
import loader from "../../assets/loader.gif";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 96vh;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: none;
`;

const LoaderImage = styled.img`
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
`;
const GifLoader = () => {
  return (
    <LoaderContainer>
      <LoaderImage alt="loader-gif" src={loader} />
    </LoaderContainer>
  );
};

export default GifLoader;
