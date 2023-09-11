import React, { useState } from "react";
import Textfield from "@mui/material/TextField";
import { Container } from "./TextField.style";
import { colors } from "../../config/colors";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
function TextField(props) {
  const label = props.labelName;
  const error = props.error;
  const [passwordShown, setPasswordShown] = useState(true);
  const inputType = props.password
    ? passwordShown
      ? "password"
      : "text"
    : "text";
  const togglePasswordVisiblity = () => {
    setPasswordShown((passwordShown) => !passwordShown);
  };
  return (
    <Container width={props.width} height={props.heightConatiner}>
      <Textfield
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: `${colors.cyan}`, // change the border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: `${colors.cyan}`, // change the border color when focused
            },
          },
          "& label.Mui-focused": {
            color: `${colors.cyan}`, //change the color to whatever you like
          },
          "& .MuiFormHelperText-root": {
            color: "red",
          },
          "& fieldset": {
            borderColor: props.errorInput ? "red" : "default",
          },
        }}
        InputProps={
          props.password && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisiblity}>
                  {passwordShown ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
        helperText={error}
        fullWidth
        label={label}
        type={inputType}
        defaultValue={props.defaultValue}
        value={props.value}
        required={props.required}
        className="textfield"
        onChange={props.onChange}
        inputRef={props.inputRef}
        inputProps={props.inputProps}
        height={props.height}
        size={props.size}
        disabled={props.disabled}
        pattern={props.pattern}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </Container>
  );
}
export default TextField;
