import styled from "styled-components";
import { colors } from "../../config/colors";

export const GenericButtonStyle = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: ${(props) => props.h ?? "100%"};
  width: ${(props) => props.w ?? "100%"};
  color: ${(props) =>
    props.variant === "primary" ? colors.snow : colors.cyan};
  background-color: ${(props) =>
    props.variant === "primary" ? colors.cyan : colors.snow};
  border: ${(props) =>
    props.variant === "primary" ? "none" : `1px solid ${colors.cyan}`};
  border-radius: ${(props) => props.borderRadius};
  text-decoration: none;
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:hover {
    outline: 0;
    color: ${(props) =>
      props.variant === "primary"
        ? colors.snow
        : props.variant === "variant3"
        ? colors.cyan
        : colors.black};
    background: ${(props) =>
      props.variant === "primary"
        ? "linear-gradient(rgb(0 184 122/100%) 0 0);"
        : props.variant === "variant3"
        ? colors.snow
        : colors.buttonGrey};
    border: ${(props) =>
      props.variant === "primary"
        ? "none"
        : props.variant === "variant3"
        ? `2px solid ${colors.cyan}`
        : `1px solid ${colors.buttonGrey}`};
    border-radius: ${(props) => props.borderRadius};
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;
