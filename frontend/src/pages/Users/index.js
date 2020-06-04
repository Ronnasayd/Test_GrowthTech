import React, { useEffect } from "react";
import Header from "../../components/Header";
import { addRipple } from "../../utils";
import SideMenu from "../../components/SideMenu";
import Footer from "../../components/Footer";
import UserList from "../../components/UserList";

function Users(props) {
  useEffect(() => {
    addRipple();
  });

  return (
    <>
      <Header />
      <SideMenu />
      <UserList />
      <Footer />
    </>
  );
}

export default Users;
