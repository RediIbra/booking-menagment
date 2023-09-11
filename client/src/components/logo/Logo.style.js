import styled from "styled-components";
import breakpoints from "../../config/breakpoints";
import { colors } from "../../config/colors";
export const EditProjectLogo = styled.div`
  position: relative;
  max-width: 205px;
  margin: 12px auto;
  z-index: 0;

  @media (max-width: ${breakpoints.xs}) {
    margin: 0 auto !important;
    max-width: 116px !important;
  }
  @media (max-width: ${breakpoints.md}) {
    margin: 3px auto;
  }
  @media (max-width: ${breakpoints.lg}) {
    margin: 0px auto;
    max-width: 137px;
  }
`;
export const LogoEdit = styled.div`
  position: absolute;
  right: 12px;
  z-index: 1;
  top: 10px;
  @media (max-width: ${breakpoints.lg}) {
    right: -25px;
  }

  & input {
    display: none;
  }
`;
export const ImageUploadLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  margin-bottom: 0;
  border-radius: 100%;
  background: ${colors.snow};
  border: 1px solid transparent;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  font-weight: normal;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${colors.snow};
    border-color: ${colors.pencilGray};
  }
  &::after {
    background: ${colors.snow};
    border-color: ${colors.pencilGray};
  }
`;
export const LogoPreview = styled.div`
  width: 192px;
  height: 192px;
  position: relative;
  border-radius: 100%;
  border: 6px solid ${colors.cyan};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  & > div {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: c;
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 121px !important;
    height: 121px !important;
  }
  @media (max-width: ${breakpoints.md}) {
    width: 136px;
    height: 132px;
  }
  @media (max-width: ${breakpoints.lg}) {
    width: 145px;
    height: 145px;
  }
`;
