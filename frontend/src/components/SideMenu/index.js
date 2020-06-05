import React from "react";
import { Container, ItemMenu } from "./styles";
import usersSVG from "../../assets/images/group.svg";
import groupSVG from "../../assets/images/group-chat.svg";
import postsSVG from "../../assets/images/posts.svg";
import { moveSideMenu } from "../../utils";
import { useHistory } from "react-router-dom";

import ReactTooltip from "react-tooltip";
import { useDocumentReady } from "../../Hooks";

const SideMenu = () => {
  const history = useHistory();
  useDocumentReady(moveSideMenu);
  return (
    <Container className="side-menu">
      <ReactTooltip place="left" />

      <ItemMenu
        className="ripple pulse"
        data-tip="group posts"
        onClick={() => {
          setTimeout(() => {
            history.push("/");
          }, 500);
        }}
      >
        <img src={groupSVG} alt="group" />
      </ItemMenu>

      <ItemMenu
        className="ripple pulse"
        data-tip="general posts"
        onClick={() => {
          setTimeout(() => {
            history.push("/general-posts/");
          }, 500);
        }}
      >
        <img src={postsSVG} alt="posts" />
      </ItemMenu>

      <ItemMenu
        className="ripple pulse"
        data-tip="users"
        onClick={() => {
          setTimeout(() => {
            history.push("/users/");
          }, 500);
        }}
      >
        <img src={usersSVG} alt="users" />
      </ItemMenu>
    </Container>
  );
};

export default SideMenu;
