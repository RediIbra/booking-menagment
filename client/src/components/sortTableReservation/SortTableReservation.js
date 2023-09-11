import React, { useState } from "react";
import { Grid } from "@mui/material";
import GenericButton from "../genericButton/GenericButton";
import GenericPickList from "../genericPickListComponent/GenericPickList";
const SortTableReservation = (props) => {
  const options = [
    { value: "guest.firstName", label: "Guest name" },
    { value: "guest.contact", label: "Contact" },
    { value: "noAdults", label: "Number of adults" },
    { value: "noChildren", label: "Number of children" },
    { value: "noInfants", label: "Number of infants" },
    { value: "startDate", label: "Start date" },
    { value: "endDate", label: "End Date" },
    { value: "bookedDate", label: "Booked" },
    { value: "listing.listing", label: "Listing" },
    { value: "earning", label: "Earning" },
    { value: "guest.status", label: "Status" },
  ];
  const ascOptions = [
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ];
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedArcOption, setSelectedArcOption] = useState("");
  const handleOptionsChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleArcOptionsChange = (event) => {
    setSelectedArcOption(event.target.value);
  };

  const handleSubmit = () => {
    props.setType("sort");
    props.setArgs({
      sortDir: selectedArcOption,
      sortBy: selectedOption,
      pageSize: 20,
    });
  };
  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={0.7}
        sx={{
          margin: 0,
          width: "100%",
          paddingBottom: 0.5,
          padding: "5px",
        }}
        justifyContent="center"
      >
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <GenericPickList
                inputLabelId="data-options-pick-list"
                selectLabelId="data-options-pick-list"
                selectId="data-options-pick-list"
                options={options}
                value={selectedOption}
                onChange={handleOptionsChange}
                defaultValue=""
                label="Select an option"
                width="100%"
                height="48px"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <GenericPickList
                inputLabelId="data-options-pick-list"
                selectLabelId="data-options-pick-list"
                selectId="data-options-pick-list"
                options={ascOptions}
                value={selectedArcOption}
                onChange={handleArcOptionsChange}
                defaultValue=""
                label="Select an option"
                width="100%"
                height="48px"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={2}
          sx={{ margin: 0, width: "100%" }}
          justifyContent="center"
        >
          <Grid item xs={6} md={4}>
            <GenericButton
              name="Sort"
              variant="primary"
              buttonHeight="48px"
              onClick={handleSubmit}
              fontSize="20px"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SortTableReservation;
