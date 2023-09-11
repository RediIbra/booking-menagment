import React from "react";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { StyledPickList } from "./GenericPickList.style";
import { colors } from "../../config/colors";
const GenericPickList = ({
  options,
  value,
  onChange,
  label,
  defaultValue,
  width,
  selectLabelId,
  inputLabelId,
  selectId,
  height,
}) => {
  return (
    <>
      <StyledPickList
        width={width}
        height={height}
        sx={{
          height: { height },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: `${colors.cyan}`,
            },
            "&.Mui-focused fieldset": {
              borderColor: `${colors.cyan}`,
            },
            height: "100%",
          },
          "& label.Mui-focused": {
            color: `${colors.cyan}`,
          },
          padding: "0",
        }}
      >
        <InputLabel id={inputLabelId}>{label}</InputLabel>
        <Select
          labelId={selectLabelId}
          id={selectId}
          value={value}
          onChange={onChange}
          label={label}
          defaultValue={defaultValue}
          SelectDisplayProps={{
            style: { paddingTop: 11.5, paddingBottom: 11.5 },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </StyledPickList>
    </>
  );
};

export default GenericPickList;
