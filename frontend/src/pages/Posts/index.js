import React from "react";
import Header from "../../components/Header";
import PostList from "../../components/PostList";
import FloatButton from "../../components/FloatButton";
import { addRipple } from "../../utils";
import SideMenu from "../../components/SideMenu";
import Footer from "../../components/Footer";
import { useDocumentReady } from "../../Hooks";

function Posts(props) {
  useDocumentReady(() => {
    setTimeout(() => {
      addRipple();
    }, 500);
  });

  return (
    <>
      <Header />
      <SideMenu />
      <PostList endpoint={props.endpoint} />
      <FloatButton />
      <Footer />
    </>
  );
}

export default Posts;
