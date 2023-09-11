import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`;
