import React, { useRef, useState } from "react";

import {
  RegisterUserForm,
  Inputs,
  Container,
  Paragraph,
  Navigations,
  NavLink,
  ButtonDiv,
  Text,
} from "./RegisterUser.style";
import TextField from "../../../components/genericTextField/TextField";
import GenericButton from "../../../components/genericButton/GenericButton";
import { Notification } from "../../../components/notification/Notification";
import { useNavigate } from "react-router";
import axios from "axios";

function RegisterUser() {
  const password = useRef();
  const confirmPassword = useRef();
  const [load, setLoad] = useState(false);
  const [errorHandling, setErrorHandling] = useState("");
  const registerToken = localStorage.getItem("registerToken");
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
        const response = await axios.post(
          `http://192.168.10.94:8080/enjoyAlbania/savepassword/${registerToken}`,
          {
            password: password.current.value,
          }
        );
        Notification("success", response.data, 500);
        setTimeout(() => {
          localStorage.removeItem("registerToken");
          navigate("/");
        }, [2500]);
      } else {
        Notification("error", "Password must match", 1500);
      }
    }
    return setLoad(false);
  };

  return (
    <Container>
      <RegisterUserForm>
        <NavLink to="/" aria-current="page" className="active">
          <Paragraph>Register</Paragraph>
        </NavLink>
        <Text>You will recieve an email to active your password</Text>
        <Inputs>
          <TextField
            error={
              errorHandling?.alert ||
              errorHandling?.passwordAlert ||
              errorHandling?.passwordEmpty
            }
            type="password"
            inputRef={password}
            labelName="Password"
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
      </RegisterUserForm>
    </Container>
  );
}
export default RegisterUser;
