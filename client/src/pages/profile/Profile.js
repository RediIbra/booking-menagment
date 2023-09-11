import React, { useState, useEffect, useRef } from "react";
import {
  ButtonContainer,
  ButtonContentholder,
  EditIconSvg,
  Form,
  InputsContainer,
  StyledLabel,
  TextFieldContainer,
  UserProfileInputContainer,
  ChangePassContainer,
  FormsContainer,
  PasswordContainer,
  PasswordUpdateForm,
  Paragraph,
  Text,
  Inputs,
  NavLink,
  ButtonDiv,
} from "./Profile.style";
import TextField from "../../components/genericTextField/TextField";
import GenericButton from "../../components/genericButton/GenericButton";
import Logo from "../../components/logo/Logo";
import { Notification } from "../../components/notification/Notification";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState({});
  const [logoFromApi, setLogoFromApi] = useState([]);
  const [inputsDisabled, setInputsDisabled] = useState();
  const [reload, setReload] = useState(0);
  const auth = useSelector((state) => state.login);
  const accessToken = auth.user.accessToken;
  const userId = auth.user.id;
  const role = auth.user.role;
  const currentPassword = useRef();
  const newPassword = useRef();
  const confirmNewPassword = useRef();
  const [errorHandling, setErrorHandling] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setInputsDisabled(profilePicture.name === undefined);
  }, [profilePicture.name]);

  useEffect(() => {
    if (
      (accessToken === null || accessToken === undefined) &&
      (role === null || role === undefined)
    ) {
      navigate("/");
    }
  }, [accessToken, role, navigate]);

  const getUserData = async () => {
    try {
      const res = await axios.get(
        `http://192.168.10.94:8080/enjoyAlbania/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setName(res.data.name);
      setSurname(res.data.surname);
      setEmail(res.data.email);
      setPhoneNumber(res.data.phone);
      setLogoFromApi([res.data.logoType, res.data.photobyte]);
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", userId);
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("email", email);
    formData.append("phone", phoneNumber);
    if (profilePicture.name) {
      formData.append("photo", profilePicture);
    }
    if (name === "" || surname === "" || email === "" || phoneNumber === "") {
      Notification("error", "Missing required information!", 4000);
    } else {
      try {
        await axios.put(
          "http://192.168.10.94:8080/enjoyAlbania/user/update",
          formData,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setInputsDisabled(true);
        setProfilePicture({});
        Notification("success", "User profile updated sucessfully!", 2000);
      } catch (error) {
        console.log(error);
        Notification(
          "error",
          "An error happened, please try again later!",
          6000
        );
      }
    }
  };

  useEffect(() => {
    getUserData();
  }, [reload]);

  const submitPassword = async () => {
    let newPass = newPassword.current.value;
    let confirmNewPass = confirmNewPassword.current.value;
    let password = currentPassword.current.value;
    try {
      const error = validation();
      setErrorHandling(error);
      if (error === undefined) {
        if (newPass === confirmNewPass) {
          const response = await axios.post(
            `http://192.168.10.94:8080/enjoyAlbania/user/updatePassword/${userId}`,
            {
              password: password,
              newPassword: newPass,
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          console.log(response);
          Notification("success", response.data, 2000);
          newPassword.current.value = null;
          confirmNewPassword.current.value = null;
          currentPassword.current.value = null;
        } else {
          Notification("error", "Passwords do not match", 2000);
        }
      }
    } catch (error) {
      Notification("error", error.response.data, 2000);
    }
  };
  const validation = () => {
    let newPass = newPassword.current.value;
    let confirmNewPass = confirmNewPassword.current.value;
    let password = currentPassword.current.value;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    if (!password.trim()) {
      return {
        currentPasswordEmpty: "Current password is required*",
      };
    }
    if (!newPass.trim()) {
      return {
        newPasswordEmpty: "New Password is required*",
      };
    }
    if (!confirmNewPass.trim()) {
      return {
        newConfirmPasswordEmpty: "Confirm Password is required*",
      };
    }
    if (!passwordRegex.test(newPass.trim())) {
      return {
        passwordAlert:
          "Must contain at least 8 characters one uppercase letter, one lowercase, one special character and one number.",
      };
    }
  };
  return (
    <FormsContainer>
      <Form>
        <InputsContainer>
          <Logo
            sendPhoto={setProfilePicture}
            reload={reload}
            profilePhoto={logoFromApi[1]}
            profilePhotoType={logoFromApi[0]}
          />
          <EditIconSvg
            onClick={() => setInputsDisabled(false)}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "10px",
            }}
          >
            <svg
              fill="#000000"
              width="40px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2,21H8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM20.207,9.293a1,1,0,0,0-1.414,0l-6.25,6.25a1.011,1.011,0,0,0-.241.391l-1.25,3.75A1,1,0,0,0,12,21a1.014,1.014,0,0,0,.316-.051l3.75-1.25a1,1,0,0,0,.391-.242l6.25-6.25a1,1,0,0,0,0-1.414Zm-5,8.583-1.629.543.543-1.629L19.5,11.414,20.586,12.5Z" />
            </svg>
          </EditIconSvg>
          <UserProfileInputContainer>
            <StyledLabel> Name </StyledLabel>
            <TextFieldContainer>
              <TextField
                disabled={inputsDisabled}
                onChange={(e) => setName(e.target.value)}
                required={true}
                value={name || ""}
              />
            </TextFieldContainer>
          </UserProfileInputContainer>
          <UserProfileInputContainer>
            <StyledLabel> Surname </StyledLabel>
            <TextFieldContainer>
              <TextField
                disabled={inputsDisabled}
                onChange={(e) => setSurname(e.target.value)}
                value={surname || ""}
                required={true}
              />
            </TextFieldContainer>
          </UserProfileInputContainer>
          <UserProfileInputContainer>
            <StyledLabel> Email </StyledLabel>
            <TextFieldContainer>
              <TextField
                disabled={inputsDisabled}
                onChange={(e) => setEmail(e.target.value)}
                value={email || ""}
                required={true}
              />
            </TextFieldContainer>
          </UserProfileInputContainer>
          <UserProfileInputContainer>
            <StyledLabel> Phone number </StyledLabel>
            <TextFieldContainer>
              <TextField
                disabled={inputsDisabled}
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber || ""}
                type="number"
                required={true}
              />
            </TextFieldContainer>
          </UserProfileInputContainer>
          {inputsDisabled && !profilePicture.name ? null : (
            <ButtonContainer>
              <ButtonContentholder>
                <GenericButton
                  name="Cancel"
                  buttonWidth="140px"
                  buttonHeight="45px"
                  fontSize="18px"
                  onClick={() => {
                    setReload(reload + 1);
                    if (profilePicture.name) setProfilePicture({});
                    setInputsDisabled(true);
                  }}
                />
              </ButtonContentholder>
              <ButtonContentholder>
                <GenericButton
                  name="Save"
                  buttonWidth="140px"
                  buttonHeight="45px"
                  fontSize="18px"
                  variant="primary"
                  onClick={(e) => editUser(e)}
                />
              </ButtonContentholder>
            </ButtonContainer>
          )}
        </InputsContainer>
      </Form>
      <ChangePassContainer>
        <PasswordContainer>
          <PasswordUpdateForm>
            <NavLink aria-current="page" className="active">
              <Paragraph>Change Password</Paragraph>
            </NavLink>
            <Text>Please enter your new password</Text>
            <Inputs>
              <TextField
                labelName="Current Password"
                type="password"
                password
                inputRef={currentPassword}
                error={errorHandling?.currentPasswordEmpty}
              />
              <TextField
                labelName="New Password"
                type="password"
                password
                inputRef={newPassword}
                error={
                  errorHandling?.newPasswordEmpty ||
                  errorHandling?.passwordAlert
                }
              />
              <TextField
                labelName="Confirm New Password"
                type="password"
                password
                inputRef={confirmNewPassword}
                error={errorHandling?.newConfirmPasswordEmpty}
              />
            </Inputs>
            <ButtonDiv>
              <GenericButton
                buttonHeight="40px"
                variant="primary"
                buttonWidth="150px"
                fontSize="18px"
                name="Submit"
                onClick={submitPassword}
              />
            </ButtonDiv>
          </PasswordUpdateForm>
        </PasswordContainer>
      </ChangePassContainer>
    </FormsContainer>
  );
}

export default Profile;
