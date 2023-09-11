import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../config/colors";
import breakpoints from "../../config/breakpoints";

export const NavBar = styled.nav`
  height: 60px;
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
export const Logo = styled.div`
  color: ${colors.snow};
  font-size: 19px;
  font-family: "Poppins";
  padding-left: 5px;
  &:hover {
    font-size: 20px;
  }
`;
export const AlbaniaTitle = styled.span`
  color: ${colors.cyan};
  font-size: 19px;
  &:hover {
    font-size: 20px;
  }
`;
export const NavElements = styled.div``;
export const UnorderedList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  margin: 0;
  gap: 1rem;

  @media (max-width: ${breakpoints.md}) {
    display: flex;
    flex-direction: column;
    margin-left: 17px;
  }
`;
export const MenuLink = styled.div`
  align-items: center;
  color: ${colors.snow};
  font-family: "Poppins", sans-serif;
  position: relative;

  @media (max-width: ${breakpoints.md}) {
    margin-right: unset;
    margin-top: 10px;
  }
`;
export const NavLink = styled(Link)`
  color: ${colors.snow};
  font-weight: 500;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: ${colors.cyan};
  }
`;
export const LogoLink = styled(Link)`
  color: ${colors.snow};
  font-weight: 500;
  text-decoration: none;
  &:hover {
    color: ${colors.cyan};
  }
`;
export const MenuIcon = styled.div`
  display: none;
  @media (max-width: ${breakpoints.md}) {
    display: block;
    cursor: pointer;
    color: ${colors.snow};
  }
`;
export const ArrowIcon = styled.div`
  margin-right: 20px;
  margin-top: 9px;
  cursor: pointer;
  &:hover {
    color: ${colors.cyan};
  }
  @media (max-width: ${breakpoints.md}) {
    margin-right: 0;
    margin-top: 0;
  }
`;
export const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  z-index: 10;
  border-radius: 10px;
  background: ${colors.dark};
  &.active {
    display: none;
  }
`;
export const DropdownUnorderedList = styled.ul`
  margin: 10px;
  padding: 0;
  list-style: none;
`;
export const DropdownListItem = styled.div`
  width: 150px;
  padding: 10px;
  font-size: 18px;
  color: ${colors.snow};
`;
