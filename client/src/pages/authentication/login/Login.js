import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginForm,
  Inputs,
  Container,
  Paragraph,
  Navigations,
  NavLink,
  ButtonDiv,
} from "./Login.style";
import TextField from "../../../components/genericTextField/TextField";
import GenericButton from "../../../components/genericButton/GenericButton";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/auth/login/loginActions";

function Login() {
  const auth = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passRef = useRef();
  const accessToken = auth.user.accessToken;
  const [errorHandling, setErrorHandling] = useState("");
  console.log(auth);

  const validation = () => {
    const email = emailRef?.current.value;
    const password = passRef?.current.value;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    if (!email.trim() && !password.trim()) {
      return {
        alert: "Please complete the field",
      };
    }
    if (!email.trim()) {
      return {
        emailEmpty: "Email is required*",
      };
    }
    if (!password.trim()) {
      return {
        passwordEmpty: "Password is required*",
      };
    }
    if (!emailRegex.test(email.trim())) {
      return {
        emailAlert: "Please enter a valid email address.",
      };
    }
  };

  const handleLogin = () => {
    const error = validation();
    setErrorHandling(error);
    if (error === undefined) {
      const values = {
        email: emailRef?.current.value,
        password: passRef?.current.value,
      };

      dispatch(login(values));
    }
  };
  useEffect(() => {
    if (accessToken !== null && accessToken !== undefined) {
      navigate("/dashboard");
    }
  }, [accessToken, navigate]);

  return (
    <Container>
      <LoginForm>
        <Paragraph>Login</Paragraph>
        <Inputs>
          <TextField
            error={
              errorHandling?.alert ||
              errorHandling?.emailAlert ||
              errorHandling?.emailEmpty
            }
            labelName="Email"
            inputRef={emailRef}
          />
          <TextField
            error={
              errorHandling?.alert ||
              errorHandling?.passwordAlert ||
              errorHandling?.passwordEmpty
            }
            type="password"
            labelName="Password"
            inputRef={passRef}
            password
          />
        </Inputs>
        <Navigations>
          <NavLink to="/register" aria-current="page" className="active">
            Don't have an account?
          </NavLink>
          <NavLink to="/forgotpassword" aria-current="page" className="active">
            Forgot password?
          </NavLink>
        </Navigations>
        <ButtonDiv>
          <GenericButton
            name="Submit"
            buttonHeight="40px"
            variant="primary"
            buttonWidth="150px"
            fontSize="18px"
            onClick={() => handleLogin()}
          />
        </ButtonDiv>
      </LoginForm>
    </Container>
  );
}

export default Login;
