import styled from "styled-components";
import breakpoints from "../../config/breakpoints";
import { colors } from "../../config/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const LinkHome = styled.div`
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  background-color: ${colors.skyBlue};
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #005fa3;
  }
`;
