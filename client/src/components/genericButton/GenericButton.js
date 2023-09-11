import React from "react";
import { GenericButtonStyle } from "./GenericButton.style";

function GenericButton(props) {
  return (
    <GenericButtonStyle
      onClick={props.onClick}
      h={props.buttonHeight}
      w={props.buttonWidth}
      variant={props.variant}
      borderRadius={props.borderRadius ?? "5px"}
      fontFamily={props.fontFamily ?? "Poppins, serif"}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight ?? "200"}
      disabled={props.disabled}
    >
      {props.name}
    </GenericButtonStyle>
  );
}

export default GenericButton;
