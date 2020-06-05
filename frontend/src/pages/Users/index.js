import React from "react";
import Header from "../../components/Header";
import { addRipple } from "../../utils";
import SideMenu from "../../components/SideMenu";
import Footer from "../../components/Footer";
import UserList from "../../components/UserList";
import { useDocumentReady } from "../../Hooks";

function Users(props) {
  useDocumentReady(() => {
    setTimeout(() => {
      addRipple();
    }, 500);
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
