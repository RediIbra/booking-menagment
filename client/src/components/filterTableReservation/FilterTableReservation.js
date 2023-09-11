import TextField from "../genericTextField/TextField";
import { Grid } from "@mui/material";
import DateField from "../genericDateField/DateField";
import GenericButton from "../genericButton/GenericButton";
import GenericPickList from "../genericPickListComponent/GenericPickList";
import { useState, useRef } from "react";
import { Notification } from "../notification/Notification";
const options = [
  { value: "startDate", label: "Start Date" },
  { value: "endDate", label: "End Date" },
  { value: "bookedDate", label: "Booked Date" },
  { value: "createdDate", label: "Created Date" },
];

function FilterTableReservation(props) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const confirmationCodeRef = useRef();
  const statusRef = useRef();
  const guestNameRef = useRef();
  const contactRef = useRef();
  const listingRef = useRef();
  const minEarningRef = useRef();
  const maxEarningRef = useRef();
  const [errorInput, setErrorInput] = useState(false);

  function handleStartDateChange(event) {
    const day = event.$D;
    const month = event.$M + 1;
    const year = event.$y;
    setStartDate(`${day}/${month}/${year}`);
  }

  function handleEndDateChange(event) {
    const day = event.$D;
    const month = event.$M + 1;
    const year = event.$y;
    setEndDate(`${day}/${month}/${year}`);
  }

  console.log("startDate", startDate);
  console.log("end Date", endDate);

  const handleSubmit = () => {
    if (minEarningRef.current.value > maxEarningRef.current.value) {
      Notification(
        "error",
        "Min Earning can't be higher than Max Earning",
        4000
      );
      setErrorInput(true);
    } else {
      setErrorInput(false);
      props.setType("filter");
      const params = {
        confirmationCode: confirmationCodeRef.current.value || null,
        status: statusRef.current.value || null,
        guestName: guestNameRef.current.value || null,
        contact: contactRef.current.value || null,
        listing: listingRef.current.value || null,
        [selectedOption]: true,
        start: `${startDate}` || null,
        end: `${endDate}` || null,
        earningMin: minEarningRef.current.value || null,
        earningMax: maxEarningRef.current.value || null,
        pageSize: 20,
      };
      props.setArgs(params);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
      >
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <TextField
            labelName="Confirmation code"
            inputRef={confirmationCodeRef}
            type="text"
            inputProps={{
              style: {
                height: "15px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <TextField
            labelName="Status"
            inputRef={statusRef}
            inputProps={{
              style: {
                height: "15px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            labelName="Guest Name"
            inputRef={guestNameRef}
            inputProps={{
              style: {
                height: "15px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            labelName="Contact"
            inputRef={contactRef}
            inputProps={{
              style: {
                height: "15px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            labelName="Listing"
            inputRef={listingRef}
            inputProps={{
              style: {
                height: "15px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={12}>
              <Grid container justifyContent="space-around" spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                    labelName="Min Earning"
                    inputRef={minEarningRef}
                    type="number"
                    inputProps={{
                      min: "0",
                      style: {
                        height: "15px",
                      },
                    }}
                    errorInput={errorInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                    labelName="Max Earning"
                    type="number"
                    inputRef={maxEarningRef}
                    inputProps={{
                      min: "0",
                      style: {
                        height: "15px",
                      },
                    }}
                    errorInput={errorInput}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <GenericPickList
                inputLabelId="data-options-pick-list"
                selectLabelId="data-options-pick-list"
                selectId="data-options-pick-list"
                options={options}
                value={selectedOption}
                onChange={handleOptionChange}
                defaultValue=""
                label="Select an options date to filter "
                width="100%"
                height="48px"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <DateField
                    width="100%"
                    label="From Date"
                    onChange={handleStartDateChange}
                    height="48px"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <DateField
                    width="100%"
                    label="To Date"
                    onChange={handleEndDateChange}
                    height="48px"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={2}
          sx={{
            margin: "0",
            width: "100%",
          }}
          justifyContent="center"
        >
          <Grid item xs={6} md={4}>
            <GenericButton
              name="Filter"
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
}
export default FilterTableReservation;
