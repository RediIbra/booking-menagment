//import styled from "styled-components";
import { colors } from "../../config/colors";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/system";
import breakpoints from "../../config/breakpoints";
export const TableComponent = styled(Table)`
  font-family: Poppins, serif;
`;
export const TableBodyComponent = styled(TableBody)`
  /* overflow-y: auto; */
  width: 100%;
`;
export const TableCellComponent = styled(TableCell)`
  /* border-right: 1px solid black; */
`;
export const TableHeadCellComponent = styled(TableCell)`
  /* border-right: 1px solid black; */
  font-size: 15px;
  font-weight: 700;
  background-color: ${colors.buttonGrey};
`;
export const TableContainerComponent = styled(TableContainer)`
  width: ${(props) => props.containerwidth};
  overflow-y: auto;
  height: ${(props) => props.containerheight};
  margin-top: ${(props) => props.margintop};
`;
export const TableHeadComponent = styled(TableHead)`
  position: sticky;
  top: 0;
  z-index: 0;
  @media (max-width: ${breakpoints.md}) {
    position: static;
    top: 0;
    height: 50px;
  }
`;
export const TableRowComponent = styled(TableRow)``;
