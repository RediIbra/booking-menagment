import React from "react";
import Dropzone from "react-dropzone";
import { DnDZone } from "./FileUpload.style";
import { colors } from "../../config/colors";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import GenericButton from "../genericButton/GenericButton";
import { Grid } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import PublishIcon from "@mui/icons-material/Publish";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { Notification } from "../notification/Notification";

const StyledH4 = styled.h4`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "18px")};
  font-weight: bold;
  margin-bottom: ${(props) => (props.marginB ? props.marginB : "10px")};
  margin-top: ${(props) => props.marginT};
  text-align: ${(props) => props.textAlign};
`;
const StyledP = styled.p`
  font-size: 16px;
  color: ${colors.cyan};
`;

const StyledDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
const StyledAside = styled.aside`
  max-width: 100%;
  margin: auto;
`;

const styleForAddTaskModalBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#FFFFFF",
  boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.1)",
  p: 4,
  padding: 5,
  outline: 0,
  height: "350px",
  maxHeight: "90%",
  overflowY: "auto",
  width: "450px",
  "@media (max-width: 780px)": {
    width: "70%",
  },
};

function FileUpload(props) {
  const fileFormData = new FormData();
  let filesShow;
  const auth = useSelector((state) => state.login);
  const accessToken = auth.user.accessToken;
  const handleFileUpload = (file) => {
    fileFormData.append("file", file);
    axios
      .post(
        "http://192.168.10.94:8080/enjoyAlbania/reservation/uploadFile",
        fileFormData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => Notification("success", res.data, 1000))
      .catch((err) => {
        Notification("error", err.response.data, 1000);
      });
    setTimeout(() => {
      props.handleClose();
      props.reloadPage();
    }, 1500);
  };
  const handleUpload = (files) => {
    filesShow = files.map((f, i) => (
      <Grid container sx={{ margin: 0 }} item key={i}>
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          lg={8}
          sx={{
            fontSize: "14px",
            lineHeight: "1.4",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {f.path} - {f.size} bytes
        </Grid>
        <Grid
          container
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          justifyContent="end"
          columnGap={2}
        >
          <Grid item xs={4} sm={3} md={3} lg={3}>
            <GenericButton
              variant="primary"
              name={<PublishIcon />}
              onClick={() => handleFileUpload(f)}
            />
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={3}>
            <GenericButton onClick={props.handleClose} name={<RemoveIcon />} />
          </Grid>
        </Grid>
      </Grid>
    ));
  };
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleForAddTaskModalBox}>
        <StyledH4 textAlign="center" marginB="45px" fontSize="25px" marginT="0">
          Upload
        </StyledH4>

        <Dropzone
          onDrop={(acceptedFiles) => handleUpload(acceptedFiles)}
          multiple={false}
        >
          {({ getRootProps, getInputProps, isDragActive }) => (
            <Box>
              <Box {...getRootProps()}>
                <input {...getInputProps()} />
                <DnDZone>
                  <AttachFileIcon sx={{ color: `${colors.cyan}` }} />
                  <StyledP>
                    Drag files to upload, or click to choose file
                  </StyledP>
                </DnDZone>
              </Box>
              <StyledAside>
                {filesShow ? <StyledH4 marginT="40px">Files</StyledH4> : null}
                <StyledDiv>{filesShow}</StyledDiv>
              </StyledAside>
            </Box>
          )}
        </Dropzone>
      </Box>
    </Modal>
  );
}

export default FileUpload;
