import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../config/colors";
import breakpoints from "../../../config/breakpoints";

export const Container = styled.div `
  /* display: flex;
  width: 100vw;
  height: 100vh;
  align-content: center;
  justify-content: center; */
  padding: 0 0 10px 0;
`;
export const RegisterPasswordForm = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;

  max-width: 733px;
  background-color: rgba(248, 248, 248, 0.47);
  border-radius: 22px;
  box-shadow: 2px 4px 10px 1px rgba(96, 94, 94, 0.47);
  @media (max-width: ${breakpoints.md}) {
    max-width: 333px;

    /* margin: 27% auto; */
  }
  /* box-shadow: 2px 4px 10px 1px rgba(96, 94, 94, 0.47);
  padding: 20px;
  margin: 2% auto;
  background-color: rgba(248, 248, 248, 0.47);
  width: 100%;
  max-width: 710px;
  border-radius: 22px; */

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
`;

export const Paragraph = styled.p `
  margin: 20px 0 20px;
  font-size: 24px;
  font-weight: 700;
  font-family: "Poppins";
  color: #333;
  text-align: center;
`;
export const Text = styled.h1 `
  font-size: 10px;
  font-size: 400;
`;
export const Inputs = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20%;
  width: 300px;
  @media (max-width: ${breakpoints.sm}) {
    width: 70%;
  }
`;

export const Navigations = styled.div `
  display: flex;
  justify-content: space-evenly;
  font-family: "Poppins", sans-serif;
  width: 100%;
  font-size: 14px;
`;
export const NavLink = styled(Link)
`
  color: ${colors.dark};
  font-weight: 300;
  text-decoration: none;
`;

export const ButtonDiv = styled.div `
  margin: 20px 0 20px 0;
`;