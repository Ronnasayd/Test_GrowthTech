import React, { useEffect } from "react";
import Header from "../../components/Header";
import PostList from "../../components/PostList";
import FloatButton from "../../components/FloatButton";
import { addRipple } from "../../utils";

function Home() {
  useEffect(() => {
    addRipple();
  });
  return (
    <>
      <Header />
      <PostList />
      <FloatButton />
    </>
  );
}

export default Home;
