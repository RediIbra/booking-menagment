import React, { useRef, useState } from "react";
import {
  ForgotPasswordForm,
  Inputs,
  Container,
  Paragraph,
  Navigations,
  NavLink,
  ButtonDiv,
  Text,
} from "./ForgotPassword.style";
import TextField from "../../../components/genericTextField/TextField";
import GenericButton from "../../../components/genericButton/GenericButton";
import axios from "axios";
import { Notification } from "../../../components/notification/Notification";
function ForgotPassword() {
  const [load, setLoad] = useState(false);
  const [errorHandling, setErrorHandling] = useState("");
  const email = useRef();
  const emailValidation = () => {
    if (email.current.value.trim() === "") {
      return { error: "Please put your email" };
    }
  };
  const submitEmail = async (e) => {
    e.preventDefault();
    setLoad(true);
    const error = emailValidation();
    setErrorHandling(error);
    if (error === undefined) {
      try {
        console.log(email.current.value);
        const response = await axios.post(
          `http://192.168.10.94:8080/enjoyAlbania/forgotPassword/${email.current.value}`
        );
        localStorage.setItem("forgetPasswordToken", response.data);
        Notification("success", "Email sent successfully", 1000);
      } catch (error) {
        Notification("error", error.response.data, 800);
      }
    }
    setLoad(false);
  };

  return (
    <Container>
      <ForgotPasswordForm>
        <NavLink to="/" aria-current="page" className="active">
          <Paragraph>Reset Password</Paragraph>
        </NavLink>
        <Text>You will recieve an email to reset your password.</Text>
        <Inputs>
          <TextField
            error={errorHandling?.error}
            inputRef={email}
            labelName="Email"
          />
        </Inputs>
        <Navigations>
          <NavLink to="/register" aria-current="page" className="active">
            Don't have an account?
          </NavLink>
        </Navigations>
        <ButtonDiv>
          <GenericButton
            name="Submit"
            buttonHeight="40px"
            variant="primary"
            buttonWidth="150px"
            fontSize="18px"
            onClick={submitEmail}
            disabled={load}
          />
        </ButtonDiv>
      </ForgotPasswordForm>
    </Container>
  );
}

export default ForgotPassword;
