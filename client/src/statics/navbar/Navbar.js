import React, { useState } from "react";
import {
  Container,
  MenuLink,
  UnorderedList,
  NavBar,
  Logo,
  NavElements,
  NavLink,
  AlbaniaTitle,
  LogoLink,
  ArrowIcon,
  DropdownMenu,
  DropdownUnorderedList,
  DropdownListItem,
} from "./Navbar.style";

import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/login/loginActions";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { useEffect } from "react";
import { useRef } from "react";
function Navbar() {
  const [openList, setOpenList] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenList(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const dispatch = useDispatch();
  return (
    <NavBar>
      <Container>
        <LogoLink to="/dashboard">
          <Logo>
            Enjoy
            <AlbaniaTitle>Albania</AlbaniaTitle>
          </Logo>
        </LogoLink>
        <NavElements>
          <UnorderedList>
            <MenuLink>
              <ArrowIcon>
                <ArrowDropDownCircleIcon
                  onClick={() => {
                    setOpenList(!openList);
                  }}
                  fontSize="large"
                />
              </ArrowIcon>

              <DropdownMenu ref={menuRef} className={openList ? " " : "active"}>
                <DropdownUnorderedList>
                  <DropdownListItem>
                    <LogoLink
                      to="/profile"
                      onClick={() => {
                        setOpenList(!openList);
                      }}
                    >
                      Profile
                    </LogoLink>
                  </DropdownListItem>
                  <DropdownListItem>
                    <MenuLink>
                      <NavLink
                        aria-current="page"
                        onClick={() => dispatch(logOut())}
                      >
                        Log out
                      </NavLink>
                    </MenuLink>
                  </DropdownListItem>
                </DropdownUnorderedList>
              </DropdownMenu>
            </MenuLink>
          </UnorderedList>
        </NavElements>
      </Container>
    </NavBar>
  );
}

export default Navbar;
