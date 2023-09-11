import styled from "styled-components";
import breakpoints from "../../config/breakpoints";
import { colors } from "../../config/colors";

export const ModalForm = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;
export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  text-align: center;
`;
export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const CancelButton = styled.button`
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  background-color: #f44336;
`;
