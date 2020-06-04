import React, { useEffect } from "react";
import Header from "../../components/Header";
import PostList from "../../components/PostList";
import FloatButton from "../../components/FloatButton";
import { addRipple } from "../../utils";
import SideMenu from "../../components/SideMenu";

function Home() {
  useEffect(() => {
    addRipple();
  });

  return (
    <>
      <Header />
      <SideMenu />
      <PostList />
      <FloatButton />
    </>
  );
}

export default Home;
