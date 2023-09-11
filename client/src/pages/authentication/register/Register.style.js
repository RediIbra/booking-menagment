import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../config/colors";
import breakpoints from "../../../config/breakpoints";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-content: center;
  justify-content: center;
`;
export const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 500px;
  border: 3px solid ${colors.snow};
  border-radius: 10px;
  box-shadow: 0px 16px 48px 0px rgba(0, 0, 0, 0.176);

  @media (max-width: ${breakpoints.sm}) {
    width: 90vw;
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fade 1s;
`;

export const Paragraph = styled.p`
  margin: 20px 0 20px;
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  color: #333;
  text-align: center;
`;
export const Text = styled.h1`
  font-size: 10px;
  font-size: 400;
`;
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  padding: 20px 20%;
  @media (max-width: ${breakpoints.sm}) {
    width: 70%;
  }
`;

export const Navigations = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: "Poppins", sans-serif;
  width: 100%;
  font-size: 14px;
`;
export const NavLink = styled(Link)`
  color: ${colors.dark};
  font-weight: 300;

  transition: transform 0.2s ease-in-out;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    transform: scale(1.1);
  }
`;

export const ButtonDiv = styled.div`
  margin: 20px 0 20px 0;
`;
