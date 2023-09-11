import React, { useRef, useState } from "react";

import {
  RegisterPasswordForm,
  Inputs,
  Container,
  Paragraph,
  NavLink,
  ButtonDiv,
  Text,
} from "./RegisterPassword.style";
import TextField from "../../../components/genericTextField/TextField";
import GenericButton from "../../../components/genericButton/GenericButton";
import { Notification } from "../../../components/notification/Notification";
import { useNavigate } from "react-router";
import axios from "axios";

function RegisterPassword() {
  const password = useRef();
  const confirmPassword = useRef();
  const [load, setLoad] = useState(false);
  const [errorHandling, setErrorHandling] = useState("");
  const forgetPasswordToken = localStorage.getItem("forgetPasswordToken");
  const navigate = useNavigate();

  const validation = () => {
    const passwordVal = password?.current.value;
    const confirmPasswordVal = confirmPassword?.current.value;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    if (!confirmPasswordVal.trim() && !passwordVal.trim()) {
      return {
        alert: "Please complete the field",
      };
    }
    if (!passwordVal.trim()) {
      return {
        passwordEmpty: "Password is required*",
      };
    }
    if (!confirmPasswordVal.trim()) {
      return {
        confirmPasswordEmpty: "Confirm Password is required*",
      };
    }
    if (!passwordRegex.test(passwordVal.trim())) {
      return {
        passwordAlert:
          "Must contain at least 8 characters one uppercase letter, one lowercase, one special character and one number.",
      };
    }
  };

  const submitPassword = async () => {
    const error = validation();
    setErrorHandling(error);

    if (error === undefined) {
      if (password.current.value === confirmPassword.current.value) {
        setLoad(true);
        console.log(password.current.value);
        const response = await axios.put(
          `http://192.168.10.94:8080/enjoyAlbania/resetPassword/${forgetPasswordToken}`,
          {
            password: password.current.value,
          }
        );
        console.log(response);
        if (response.status === 200) {
          Notification("success", response.data, 2500);
          setTimeout(() => {
            localStorage.removeItem("forgetPasswordToken");
            navigate("/");
          }, [2500]);
        } else {
          Notification("error", response.data, 4000);
          setLoad(false);
        }
      } else {
        Notification("error", "Passwords must match", 1500);
        setLoad(false);
      }
    }
  };
  console.log(errorHandling);
  return (
    <Container>
      <RegisterPasswordForm>
        <NavLink aria-current="page" className="active">
          <Paragraph>Change Password</Paragraph>
        </NavLink>
        <Text>Please enter your new password</Text>
        <Inputs>
          <TextField
            error={
              errorHandling?.alert ||
              errorHandling?.passwordAlert ||
              errorHandling?.passwordEmpty
            }
            inputRef={password}
            labelName="Password"
            type="password"
            password
          />
          <TextField
            error={errorHandling?.alert || errorHandling?.confirmPasswordEmpty}
            inputRef={confirmPassword}
            labelName="Confirm Password"
            type="password"
            password
          />
        </Inputs>
        <ButtonDiv>
          <GenericButton
            name="Submit"
            buttonHeight="40px"
            variant="primary"
            buttonWidth="150px"
            fontSize="18px"
            onClick={submitPassword}
            disabled={load}
          ></GenericButton>
        </ButtonDiv>
      </RegisterPasswordForm>
    </Container>
  );
}
export default RegisterPassword;
