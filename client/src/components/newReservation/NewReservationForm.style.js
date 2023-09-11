import styled from "styled-components";
import breakpoints from "../../config/breakpoints";
import { colors } from "../../config/colors";

export const ReservationForm = styled.form ``;
export const ReservationContainer = styled.div `
  box-shadow: 2px 4px 10px 1px rgba(96, 94, 94, 0.47);
  padding: 15px;
  margin: 2% auto;
  background-color: rgba(248, 248, 248, 0.47);
  width: 100%;
  max-width: 710px;
  border-radius: 22px;
  @media (max-width: ${breakpoints.md}) {
    max-width: 311px;
  }
`;
export const TitleReservation = styled.h1 `
  font-family: "Poppins", sans-serif;
  font-size: 26px;
  color: ${colors.dark};
  text-align: center;
  padding: 0 0 12px 0;
`;

export const ReservationLabel = styled.label `
  margin-top: 15px;
  font-weight: bold;
  color: ${colors.dark};
  padding: 10px;
  @media (max-width: ${breakpoints.md}) {
    font-size: 14px;
  }
`;
export const ReservationTextFieldContainer = styled.div `
  padding: 7px;
`;
export const TwoDivContainer = styled.div `
  display: flex;
  width: 100%;
`;
export const OneDivContainer = styled.div `
  flex: 1;
`;
export const ReservationButtonContainer = styled.div `
  display: flex;
  justify-content: center;
  padding: 10px 0px 0px 0px;
`;
export const ReservationButtonContentHolder = styled.div `
  padding: 10px;
`;