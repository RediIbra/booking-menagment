import { Container, CenterDivForTable } from "./Dashboard.style";
import ReservationTable from "../../components/reservationTable/ReservationTable";
import FilterTableReservation from "../../components/filterTableReservation/FilterTableReservation";
import FileUpload from "../../components/fileUpload/FileUpload";
import { useState } from "react";
import GenericButton from "../../components/genericButton/GenericButton";
import { Grid } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import SortTableReservation from "../../components/sortTableReservation/SortTableReservation";
function Dashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSortVisible, setIsSortVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [reload, setReload] = useState(0);

  const handleFileUploadClose = () => {
    setModalOpen(false);
  };
  const handleUploadClick = () => {
    setModalOpen(true);
  };
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const handleSortClick = () => {
    setIsSortVisible(!isSortVisible);
  };

  const auth = useSelector((state) => state.login);
  const navigate = useNavigate();
  const { accessToken, role } = auth.user;
  const [pageSize, setPageSize] = useState(0);
  const [type, setType] = useState("");

  const handlePageChange = () => {
    setPageSize(pageSize + 1);
  };

  const handleResFilter = (args) => {
    setSearchArguments({
      ...searchArguments,
      params: { ...searchArguments.params, ...args },
    });
  };
  const handleResSort = (args) => {
    setSearchArguments({
      ...searchArguments,
      params: {
        ...searchArguments.params,
        sortDir: args.sortDir,
        sortBy: args.sortBy,
      },
    });
  };
  const [searchArguments, setSearchArguments] = useState({
    params: {
      sortDir: "desc",
      sortBy: "createdDate",
      pageSize: 20,
    },
    accessToken,
    type,
  });

  const handleAddReservation = () => {
    navigate("/newReservation");
  };

  const handleFilterType = (actionType) => {
    setPageSize(0);
    setType(actionType);
  };

  useEffect(() => {
    if (
      (accessToken === null || accessToken === undefined) &&
      (role === null || role === undefined)
    ) {
      navigate("/");
    }
  }, [accessToken, role, navigate]);
  return (
    <>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        sx={{ width: "100%", paddingTop: "23px" }}
        justifyContent="end"
        xs={11.4}
        item
      >
        <Grid item sx={{ paddingLeft: "24px !important" }}>
          <GenericButton
            onClick={handleAddReservation}
            name={"Add"}
            buttonHeight="45px"
            buttonWidth="70px"
            fontSize="16px"
            variant={"primary"}
          />
        </Grid>
        <Grid item sx={{ paddingLeft: "24px !important" }}>
          <GenericButton
            onClick={handleClick}
            name={
              isVisible ? (
                <FilterAltIcon sx={{ fontSize: 24 }} />
              ) : (
                <FilterAltIcon sx={{ fontSize: 24 }} />
              )
            }
            buttonHeight="45px"
            buttonWidth="70px"
            fontSize="16px"
            variant={isVisible ? "variant3" : "primary"}
          />
        </Grid>

        <Grid item sx={{ paddingLeft: "24px !important" }}>
          <GenericButton
            onClick={handleSortClick}
            name={
              isSortVisible ? (
                <SortIcon sx={{ fontSize: 24 }} />
              ) : (
                <SortIcon sx={{ fontSize: 24 }} />
              )
            }
            buttonHeight="45px"
            buttonWidth="70px"
            fontSize="16px"
            variant={isSortVisible ? "variant3" : "primary"}
          />
        </Grid>
        <Grid item sx={{ paddingLeft: "24px !important" }}>
          {modalOpen ? (
            <FileUpload
              open={modalOpen}
              handleClose={handleFileUploadClose}
              reloadPage={() => setReload(reload + 1)}
            />
          ) : null}
          <GenericButton
            name={<FileUploadIcon />}
            variant="primary"
            onClick={handleUploadClick}
            buttonHeight="45px"
            buttonWidth="70px"
            fontSize="16px"
          />
        </Grid>
      </Grid>
      {isVisible && (
        <FilterTableReservation
          setType={handleFilterType}
          setArgs={handleResFilter}
        />
      )}
      {isSortVisible && (
        <SortTableReservation
          setType={handleFilterType}
          setArgs={handleResSort}
        />
      )}
      <Container>
        <CenterDivForTable>
          <ReservationTable
            type={type}
            pageS={pageSize}
            searchArgs={searchArguments}
            handlePageChange={handlePageChange}
            width="90%"
            height={isVisible || isSortVisible ? "62vh" : "80vh"}
            reload={reload}
          />
        </CenterDivForTable>
      </Container>
    </>
  );
}
export default Dashboard;
