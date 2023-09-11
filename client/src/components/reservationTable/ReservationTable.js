import React, { useEffect, useRef, useState } from "react";
import {
  TableComponent,
  TableBodyComponent,
  TableCellComponent,
  TableHeadCellComponent,
  TableContainerComponent,
  TableHeadComponent,
  TableRowComponent,
} from "./ReservationTable.style";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllreservations,
  deleteSingleReservation,
} from "../../redux/reservations/reservationsActions";
import { Actions } from "../../pages/dashboard/Dashboard.style";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
function ReservationTable(props) {
  const resData = useSelector((state) => state.reservations);
  const { allReservations } = resData;
  console.log(allReservations);
  const auth = useSelector((state) => state.login);
  const accessToken = auth.user.accessToken;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scrollRef = useRef();
  const [openModal, setOpenModal] = useState(false);
  const [modalAction, setModalAction] = useState("");
  const [resId, setresId] = useState("");
  useEffect(() => {
    const params = {
      ...props.searchArgs,
      pageSize: props.pageS,
      type: props.type,
    };
    dispatch(getAllreservations(params));
  }, [dispatch, props.searchArgs, props.pageS, props.reload, props.type]);

  useEffect(() => {
    if (modalAction === "yes") {
      dispatch(deleteSingleReservation({ resId, accessToken }));
      setOpenModal(false);
      setModalAction("");
    } else if (modalAction === "cancel") {
      setOpenModal(false);
      setModalAction("");
    }
  }, [modalAction, resId, openModal]);

  const removeReservation = (resId) => {
    setOpenModal(true);
    setresId(resId);
  };

  const editReservation = (resId) => {
    navigate("/newReservation", { state: { reservationId: resId } });
  };

  const editIcons = (resId) => (
    <Actions key={resId}>
      <CiEdit size={25} onClick={() => editReservation(resId)} />
      <MdDeleteForever size={25} onClick={() => removeReservation(resId)} />
    </Actions>
  );

  const reservationsMapforTable = allReservations.map((r) => ({
    "Confirmation code": r.confirmationCode,
    Status: r.status,
    "Guest Name": r.guestName,
    Contact: r.contact,
    "# of adults": r.nrAdults,
    "# of children": r.nrChildren,
    "# of infants": r.nrInfants,
    "Start Date": r.startDate,
    "End Date": r.endDate,
    Booked: r.bookedDate,
    Listing: r.listing,
    Earning: r.earning,
    Id: r.id,
    Actions: editIcons(r.id),
  }));

  const infoKeys = reservationsMapforTable[0]
    ? Object.keys(reservationsMapforTable[0])
    : [];

  const tableHeadCellsRender = infoKeys
    .filter((h) => h !== "Id")
    .map((h, index) => (
      <TableHeadCellComponent key={index}>{h}</TableHeadCellComponent>
    ));
  const tableBodyCellsRender = reservationsMapforTable.map((r) => {
    const tableRowData = infoKeys
      .filter((k) => k !== "Id")
      .map((k, i) => <TableCellComponent key={i}>{r[k]}</TableCellComponent>);
    return <TableRowComponent key={r.Id}>{tableRowData}</TableRowComponent>;
  });

  const onScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        props.handlePageChange();
      }
    }
  };
  return (
    <TableContainerComponent
      component={Paper}
      containerwidth={props.width ?? "100%"}
      containerheight={props.height ?? "90vh"}
      ref={scrollRef}
      onScroll={onScroll}
      margintop="20px"
    >
      <TableComponent>
        <TableHeadComponent>
          <TableRowComponent>{tableHeadCellsRender}</TableRowComponent>
        </TableHeadComponent>
        <TableBodyComponent>{tableBodyCellsRender}</TableBodyComponent>
      </TableComponent>
      {openModal && <Modal modalMessage={setModalAction} />}
    </TableContainerComponent>
  );
}

export default ReservationTable;
