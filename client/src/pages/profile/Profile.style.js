import PhoneInput from "react-phone-input-2";
import styled from "styled-components";
import { colors } from "../../config/colors";
import "react-phone-input-2/lib/bootstrap.css";
import breakpoints from "../../config/breakpoints";
import { Link } from "react-router-dom";
export const FormsContainer = styled.div``;
export const ChangePassContainer = styled.div``;
export const Form = styled.form`
  @media (max-width: ${breakpoints.md}) {
    padding: 20px;
  }
`;
export const InputsContainer = styled.div`
  box-shadow: 2px 4px 10px 1px rgba(96, 94, 94, 0.47);
  padding: 10px;
  margin: 1% auto;
  background-color: rgba(248, 248, 248, 0.47);
  width: 100%;
  max-width: 710px;
  border-radius: 22px;
  @media (max-width: ${breakpoints.md}) {
    max-width: 311px;
  }
`;
export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 23px;
  color: ${colors.dark};
  text-align: center;
`;
export const UserProfileInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
export const StyledLabel = styled.label`
  margin-top: 15px;
  font-weight: bold;
  color: ${colors.dark};
  flex: 1;
`;
export const TextFieldContainer = styled.div`
  flex: 1;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 18px 5px 15px 5px;
`;
export const ButtonContentholder = styled.div`
  padding: 10px;
`;
export const UserPhoneProfile = styled(PhoneInput)`
  max-width: 284px;
  column-gap: 15px;
  border-radius: 5.5px;
  font-weight: 700;
  outline: none;
  box-sizing: border-box;
  border: none;
  width: 100%;
  height: 56.5px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: left;
  line-height: 16px;
  flex: 1;

  &.react-tel-input .selected-flag.open:before,
  &.react-tel-input .selected-flag:focus:before {
    border-color: transparent;
    box-shadow: none;
  }

  &.react-tel-input {
    max-width: 344px;
  }
  @media (max-width: ${breakpoints.md}) {
    min-width: 144px;
  }
  &.react-tel-input .form-control {
    width: 100%;
    font-size: 16px;
    border-radius: 5px;
    width: 342px;
    outline: 0;
    padding: 16.5px 2px 18.5px 60px;
    box-shadow: none;
    color: ${colors.grey};
    border-color: transparent;
    background-color: transparent;

    @media (max-width: ${breakpoints.md}) {
      width: 100%;
      max-width: 231px;
    }

    &.flag-dropdown :hover,
    :active,
    :focus {
      border-color: ${colors.cyan};
      box-shadow: ${colors.cyan};
      outline: ${colors.cyan};
    }
  }
`;
export const UserPRofile1 = styled.div`
  width: 70%;
  margin: auto;
`;
export const EditIconSvg = styled.div``;
//////////////////////////////////////////////////////////
export const PasswordContainer = styled.div`
  /* display: flex;
  width: 100vw;
  height: 100vh;
  align-content: center;
  justify-content: center; */
  padding: 0 0 10px 0;
`;
export const PasswordUpdateForm = styled.div`
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

export const Paragraph = styled.p`
  margin: 20px 0 20px;
  font-size: 32px;
  font-weight: 700;
  font-family: "Poppins";
  color: #333;
  text-align: center;
`;
export const Text = styled.h1`
  font-size: 16px;
  font-size: 400;
`;
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20%;
  width: 300px;
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
  text-decoration: none;
`;

export const ButtonDiv = styled.div`
  margin: 10px 0 10px 0;
`;
