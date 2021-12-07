import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthenticationModal from "features/authentication/AuthenticationModal";
import deAuthenticateUser from "features/authentication/deAuthenticateUser";
import reAuthenticateUser from "features/authentication/reAuthenticateUser";
import getAuthenticatedUser from "features/authentication/getAuthenticatedUser";

import CustomNav from "styled-components/CustomNav";
import CustomIconButton from "styled-components/CustomIconButton";
import CustomButtonGroup from "styled-components/CustomButtonGroup";
import Toolbar from "@mui/material/Toolbar";

const Nav = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const email = user?.email;

  useEffect(() => {
    const loggedUser = getAuthenticatedUser();
    if (loggedUser) {
      dispatch(reAuthenticateUser(loggedUser));
    }
  }, [dispatch]);

  const toggleAuthenticationModal = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    dispatch(deAuthenticateUser());
  };
  
  return (
    <CustomNav sx={{ mt: -2 }}>
      <Toolbar>
        <CustomButtonGroup sx={{ mx: "auto" }}>
            <CustomIconButton>
              <Link href={`/`}>Home</Link>
            </CustomIconButton>
            <CustomIconButton>
              {user?.role === "ROLE_ADMIN" && (
                <Link href={`/admin`}>Admin panel </Link>
              )}
            </CustomIconButton>
            <CustomIconButton>
              {email && <Link href={`/user`}>{email}</Link>}
            </CustomIconButton>
            {email ? (
              <CustomIconButton onClick={logout}>logout</CustomIconButton>
            ) : (
              <CustomIconButton onClick={toggleAuthenticationModal}>login</CustomIconButton>
            )}
            {isOpen && (
              <AuthenticationModal
                closeModal={toggleAuthenticationModal}
              ></AuthenticationModal>
            )}
        </CustomButtonGroup>
      </Toolbar>
    </CustomNav>
  );
};

export default Nav;
