import { useRef, useState } from "react";
import {
  RegisterForm,
  Inputs,
  Container,
  Paragraph,
  Navigations,
  NavLink,
  ButtonDiv,
  Text,
} from "./Register.style";
import TextField from "../../../components/genericTextField/TextField";
import GenericButton from "../../../components/genericButton/GenericButton";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/auth/register/registerActions";
function Register() {
  const loading = useSelector((state) => state.register.loading);
  const name = useRef();
  const surname = useRef();
  const email = useRef();
  const phone = useRef();
  const dispatch = useDispatch();
  const [errorHandling, setErrorHandling] = useState("");
  const validation = () => {
    const nameVal = name?.current.value;
    const surnameVal = surname?.current.value;
    const emailVal = email?.current.value;
    const phoneVal = phone.current.value;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    const errorMessage = {};
    if (
      !emailVal.trim() &&
      !surnameVal.trim() &&
      !nameVal.trim() &&
      !phoneVal.trim()
    ) {
      return {
        alert: "Please complete the field",
      };
    }
    if (!nameVal.trim()) {
      errorMessage.nameEmpty = "Name is required*";
    }
    if (!surnameVal.trim()) {
      errorMessage.surnameEmpty = "Surname is required*";
    }
    if (!emailVal.trim()) {
      errorMessage.emailEmpty = "Email is required*";
    }
    if (!phoneVal.trim()) {
      errorMessage.phoneEmpty = "Phone is required*";
    }

    if (!emailRegex.test(emailVal.trim())) {
      errorMessage.emailAlert = "Please enter a valid email address.";
    }
    if (!phoneRegex.test(phoneVal.trim())) {
      errorMessage.phoneAlert = "Please enter a valid phone number.";
    }
    return errorMessage;
  };

  const registerSubmit = async () => {
    const error = validation();
    setErrorHandling(error);
    if (Object.keys(error).length === 0) {
      const values = {
        name: name.current.value,
        surname: surname.current.value,
        email: email.current.value,
        phone: phone.current.value,
      };
      dispatch(register(values));
      name.current.value = "";
      surname.current.value = "";
      email.current.value = "";
      phone.current.value = "";
    }
  };

  return (
    <Container>
      <RegisterForm>
        <NavLink to="/" aria-current="page" className="active">
          <Paragraph>Register</Paragraph>
        </NavLink>
        <Text>You will recive an email to active your password</Text>
        <Inputs>
          <TextField
            error={errorHandling?.alert || errorHandling?.nameEmpty}
            inputRef={name}
            labelName="Name"
          />
          <TextField
            error={errorHandling?.alert || errorHandling?.surnameEmpty}
            inputRef={surname}
            labelName="Surname"
          />
          <TextField
            error={
              errorHandling?.alert ||
              errorHandling?.emailEmpty ||
              errorHandling?.emailAlert
            }
            inputRef={email}
            labelName="Email"
          />
          <TextField
            error={
              errorHandling.alert ||
              errorHandling?.phoneEmpty ||
              errorHandling?.phoneAlert
            }
            inputRef={phone}
            labelName="Phone"
          />
        </Inputs>
        <Navigations>
          <NavLink to="/" aria-current="page" className="active">
            Already have an account?
          </NavLink>
        </Navigations>
        <ButtonDiv>
          <GenericButton
            name="Submit"
            buttonHeight="40px"
            variant="primary"
            buttonWidth="150px"
            fontSize="18px"
            onClick={registerSubmit}
            disabled={loading}
          />
        </ButtonDiv>
      </RegisterForm>
    </Container>
  );
}

export default Register;
