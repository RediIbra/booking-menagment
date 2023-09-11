import React from "react";
import { useState } from "react";
import GenericButton from "../genericButton/GenericButton";
import {
  ModalForm,
  ModalContent,
  CancelButton,
  ModalButtons,
} from "./Modal.style";

function Modal(props) {
  const modalSubmit = (m) => {
    props.modalMessage(m);
  };
  return (
    <ModalForm>
      <ModalContent>
        <p>Are you sure you want to perform this action?</p>
        <ModalButtons>
          <GenericButton
            onClick={() => modalSubmit("yes")}
            name={"Yes"}
            buttonHeight="45px"
            buttonWidth="70px"
            fontSize="16px"
            variant={"primary"}
          ></GenericButton>
          <CancelButton onClick={() => modalSubmit("cancel")}>
            Cancel
          </CancelButton>
        </ModalButtons>
      </ModalContent>
    </ModalForm>
  );
}

export default Modal;
