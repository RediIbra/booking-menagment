import React from "react";
import { useState } from "react";
import GenericButton from "../genericButton/GenericButton";
import DateField from "../genericDateField/DateField";
import TextField from "../genericTextField/TextField";
import SearchDropdown from "../searchDropdown/SearchDropdown";
import {
  ReservationForm,
  ReservationContainer,
  TitleReservation,
  ReservationLabel,
  ReservationTextFieldContainer,
  TwoDivContainer,
  OneDivContainer,
  ReservationButtonContainer,
  ReservationButtonContentHolder,
} from "./NewReservationForm.style";
import "react-notifications/lib/notifications.css";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addSingleReservation,
  editSingleReservation,
} from "../../redux/reservations/reservationsActions";
import dayjs from "dayjs";

const NewReservation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { allReservations } = useSelector((state) => state.reservations);
  const resId = location.state ? location.state.reservationId : "";
  const reservationToEdit = allReservations.filter((r) => r.id === resId)[0];
  const [confirmationCode, setConfirmationCode] = useState(
    `${reservationToEdit ? reservationToEdit.confirmationCode ?? "" : ""}`
  );
  const [status, setStatus] = useState(
    `${
      reservationToEdit
        ? reservationToEdit.status ?? "Past_Guest"
        : "Past_Guest"
    }`
  );
  const [guestName, setGuestName] = useState(
    `${reservationToEdit ? reservationToEdit.guestName ?? "" : ""}`
  );
  const [contact, setContact] = useState(
    `${reservationToEdit ? reservationToEdit.contact ?? "" : ""}`
  );
  const [numberOfAdults, setNumberOfAdults] = useState(
    `${reservationToEdit ? reservationToEdit.nrAdults : 0}`
  );
  const [numberOfChildrens, setNumberOfChildrens] = useState(
    `${reservationToEdit ? reservationToEdit.nrChildren : 0}`
  );
  const [numberOfInfants, setNumberOfInfants] = useState(
    `${reservationToEdit ? reservationToEdit.nrInfants : 0}`
  );
  const [numberOfNights, setNumberOfNights] = useState(
    `${reservationToEdit ? reservationToEdit.nrNights : 0}`
  );

  const [bookedDate, setBookedDate] = useState(
    `${reservationToEdit ? reservationToEdit.bookedDate : ""}`
  );
  const [listing, setListing] = useState(
    `${reservationToEdit ? reservationToEdit.listing : ""}`
  );
  const [source, setSource] = useState(
    `${reservationToEdit ? reservationToEdit.source : ""}`
  );
  console.log(source);
  const [earnings, setEarnings] = useState(
    `${reservationToEdit ? reservationToEdit.earning : ""}`
  );
  const [startDate, setStartDate] = useState(
    `${reservationToEdit ? reservationToEdit.startDate : ""}`
  );
  const [endDate, setEndDate] = useState(
    `${reservationToEdit ? reservationToEdit.endDate : ""}`
  );
  const auth = useSelector((state) => state.login);
  const accessToken = auth.user.accessToken;

  function handleStartDateChange(event) {
    const day = event.$D;
    const month = event.$M + 1;
    const year = event.$y;
    setStartDate(`${year}-${month}-${day}`);
  }

  function handleEndDateChange(event) {
    const day = event.$D;
    const month = event.$M + 1;
    const year = event.$y;
    setEndDate(`${year}-${month}-${day}`);
  }

  function handleBookedDateChange(event) {
    const day = event.$D;
    const month = event.$M + 1;
    const year = event.$y;
    setBookedDate(`${year}-${month}-${day}`);
  }

  const handleAddReservation = (e) => {
    e.preventDefault();
    console.log("Values: ", {
      confirmationCode: confirmationCode,
      status: status,
      guestName: guestName,
      contact: contact,
      nrAdults: numberOfAdults,
      nrChildren: numberOfChildrens,
      nrInfants: numberOfInfants,
      nrNights: numberOfNights,
      bookedDate: bookedDate,
      listing: listing,
      source: source,
      earning: earnings,
      startDate: startDate,
      endDate: endDate,
    });
    dispatch(
      addSingleReservation({
        values: {
          confirmationCode: confirmationCode,
          status: status,
          guestName: guestName,
          contact: contact,
          nrAdults: numberOfAdults,
          nrChildren: numberOfChildrens,
          nrInfants: numberOfInfants,
          nrNights: numberOfNights,
          bookedDate: bookedDate,
          listing: listing,
          source: source,
          earning: earnings,
          startDate: startDate,
          endDate: endDate,
        },
        accessToken,
      })
    );
  };
  const handleEditReservation = (e) => {
    e.preventDefault();
    dispatch(
      editSingleReservation({
        values: {
          id: reservationToEdit.id,
          confirmationCode: confirmationCode,
          status: status,
          guestName: guestName,
          contact: contact,
          nrAdults: numberOfAdults,
          nrChildren: numberOfChildrens,
          nrInfants: numberOfInfants,
          nrNights: numberOfNights,
          bookedDate: bookedDate,
          listing: listing,
          earning: earnings,
          startDate: startDate,
          endDate: endDate,
          source: source,
        },
        accessToken,
      })
    );
  };

  return (
    <ReservationForm>
      <ReservationContainer>
        <TitleReservation>
          {location.state ? "Update " : "Add "}
          Reservation
        </TitleReservation>
        <TwoDivContainer>
          <OneDivContainer>
            <ReservationLabel> Confirmation code </ReservationLabel>
            <ReservationTextFieldContainer>
              <TextField
                onChange={(e) => setConfirmationCode(e.target.value)}
                value={confirmationCode || ""}
                required={true}
              />
            </ReservationTextFieldContainer>
          </OneDivContainer>
          <OneDivContainer>
            <ReservationLabel> Status </ReservationLabel>
            <ReservationTextFieldContainer>
              <TextField
                // onChange={(e) => setStatus(e.target.value)}
                value={status || "Past_Guest"}
                required={true}
              />
            </ReservationTextFieldContainer>
          </OneDivContainer>
        </TwoDivContainer>
        <TwoDivContainer>
          <OneDivContainer>
            <ReservationLabel> Listing </ReservationLabel>
            <ReservationTextFieldContainer>
              <SearchDropdown
                token={accessToken}
                api="http://192.168.10.94:8080/enjoyAlbania/listing/allListing"
                getValue={setListing}
              />
            </ReservationTextFieldContainer>
          </OneDivContainer>
          <OneDivContainer>
            <ReservationLabel> Source </ReservationLabel>
            <ReservationTextFieldContainer>
              <SearchDropdown
                token={accessToken}
                api="http://192.168.10.94:8080/enjoyAlbania/source"
                getValue={setSource}
              />
            </ReservationTextFieldContainer>
          </OneDivContainer>
        </TwoDivContainer>
        <TwoDivContainer>
          <OneDivContainer>
            <ReservationLabel> Contact </ReservationLabel>
            <ReservationTextFieldContainer>
              <TextField
                onChange={(e) => setContact(e.target.value)}
                value={contact || ""}
                required={true}
              />
            </ReservationTextFieldContainer>
          </OneDivContainer>
          <OneDivContainer>
            <ReservationLabel> Number of adults </ReservationLabel>
            <ReservationTextFieldContainer>
              <TextField
                onChange={(e) => setNumberOfAdults(e.target.value)}
                value={numberOfAdults || ""}
                required={true}
                type="number"
              />
            </ReservationTextFieldContainer>
          </OneDivContainer>
        </TwoDivContainer>
        <TwoDivContainer>
          <OneDivContainer>
            <ReservationLabel> Number of children </ReservationLabel>
            <ReservationTextFieldContainer>
              <TextField
                onChange={(e) => setNumberOfChildrens(e.target.value)}
                value={numberOfChildrens || ""}
                required={true}
                type="number"
              />
            </ReservationTextFieldContainer>
          </OneDivContainer>
          <OneDivContainer>
            <ReservationLabel> Number of infants </ReservationLabel>
            <ReservationTextFieldContainer>
              <TextField
                onChange={(e) => setNumberOfInfants(e.target.value)}
                value={numberOfInfants || 0}
                required={true}
                type="number"
              />
            </ReservationTextFieldContainer>
          </OneDivContainer>
        </TwoDivContainer>
        <TwoDivContainer>
          <OneDivContainer>
            <ReservationLabel> Start date </ReservationLabel>
            <ReservationTextFieldContainer>
              <DateField
                width="100%"
                value={dayjs(startDate)}
                onChange={handleStartDateChange}
              />
            </ReservationTextFieldContainer>
          </OneDivContainer>
          <OneDivContainer>
            <ReservationLabel> End date </ReservationLabel>
            <ReservationTextFieldContainer>
              <DateField
                width="100%"
                value={dayjs(endDate)}
                onChange={handleEndDateChange}
              />
            </ReservationTextFieldContainer>
          </OneDivContainer>
        </TwoDivContainer>
        <TwoDivContainer>
          <OneDivContainer>
            <ReservationLabel> Number of nights </ReservationLabel>
            <ReservationTextFieldContainer>
              <TextField
                onChange={(e) => setNumberOfNights(e.target.value)}
                value={numberOfNights || ""}
                required={true}
                type="number"
              />
            </ReservationTextFieldContainer>
          </OneDivContainer>
          <OneDivContainer>
            <ReservationLabel> Booked date </ReservationLabel>
            <ReservationTextFieldContainer>
              <DateField
                value={dayjs(bookedDate)}
                width="100%"
                onChange={handleBookedDateChange}
              />
            </ReservationTextFieldContainer>
          </OneDivContainer>
        </TwoDivContainer>
        <TwoDivContainer>
          <OneDivContainer>
            <ReservationLabel> Guest name </ReservationLabel>
            <ReservationTextFieldContainer>
              <TextField
                onChange={(e) => setGuestName(e.target.value)}
                value={guestName || ""}
                required={true}
              />
            </ReservationTextFieldContainer>
          </OneDivContainer>
          <OneDivContainer>
            <ReservationLabel> Earning </ReservationLabel>
            <ReservationTextFieldContainer>
              <TextField
                onChange={(e) => {
                  setEarnings(e.target.value);
                }}
                value={earnings || ""}
                required={true}
              />
            </ReservationTextFieldContainer>
          </OneDivContainer>
        </TwoDivContainer>
        <ReservationButtonContainer>
          <ReservationButtonContentHolder>
            <GenericButton
              name={`${reservationToEdit ? "Update" : "Add"}`}
              buttonWidth="140px"
              buttonHeight="45px"
              fontSize="18px"
              variant="primary"
              onClick={
                reservationToEdit ? handleEditReservation : handleAddReservation
              }
            />
          </ReservationButtonContentHolder>
        </ReservationButtonContainer>
      </ReservationContainer>
    </ReservationForm>
  );
};

export default NewReservation;
