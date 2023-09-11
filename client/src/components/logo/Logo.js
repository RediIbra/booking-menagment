import React, { useState, useEffect } from "react";
import EditIcon from "../../assets/editlogo.svg";
import {
  EditProjectLogo,
  ImageUploadLabel,
  LogoPreview,
  LogoEdit,
} from "./Logo.style";

function Logo(props) {
  const [editLogoURL, setEditLogoURL] = useState("");

  useEffect(() => {
    setEditLogoURL(
      `data:${props.profilePhotoType};base64,${props.profilePhoto}`
    );
  }, [props.profilePhoto, props.profilePhotoType, props.reload]);

  const emptyfileList = new DataTransfer();

  useEffect(() => {
    document.querySelector("#imageUpload").files = emptyfileList.files;
  }, [props.reload, emptyfileList.files]);

  const handlePhotoUpdate = (file) => {
    props.sendPhoto(file);
  };

  return (
    <EditProjectLogo>
      <LogoEdit>
        <input
          type="file"
          id="imageUpload"
          accept=".png, .jpg, .jpeg"
          onInput={(e) => {
            setEditLogoURL(URL.createObjectURL(e.target.files[0]));
            handlePhotoUpdate(e.target.files[0]);
          }}
        />
        <ImageUploadLabel htmlFor="imageUpload">
          <img alt="editLogo" src={EditIcon} />
        </ImageUploadLabel>
      </LogoEdit>
      <LogoPreview>
        <div
          id="logoPreview"
          style={{ backgroundImage: `url(${editLogoURL ?? ""})` }}
        ></div>
      </LogoPreview>
    </EditProjectLogo>
  );
}

export default Logo;
