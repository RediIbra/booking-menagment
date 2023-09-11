import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CustomizedDatepicker } from "./DateField.style";
import { colors } from "../../config/colors";
const DateField = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CustomizedDatepicker
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        defaultValue={props.defaultValue}
        className={props.className}
        label={props.label}
        width={props.width}
        sx={{
          "& .MuiOutlinedInput-root": {
            height: props.height,
            "&:hover fieldset": {
              borderColor: `${colors.cyan}`,
            },
            "&.Mui-focused fieldset": {
              borderColor: `${colors.cyan}`,
            },
            "& label.Mui-focused": {
              color: `${colors.cyan}`,
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};
export default DateField;