import React, { useEffect } from "react";
import { Container, ItemMenu } from "./styles";
import usersSVG from "../../assets/images/group.svg";
import groupSVG from "../../assets/images/group-chat.svg";
import postsSVG from "../../assets/images/posts.svg";
import { moveSideMenu } from "../../utils";

import ReactTooltip from "react-tooltip";

const SideMenu = () => {
  useEffect(() => {
    moveSideMenu();
  }, []);
  return (
    <Container className="side-menu">
      <ReactTooltip place="left" />
      <ItemMenu className="ripple pulse" data-tip="group posts">
        <img src={groupSVG} alt="group" />
      </ItemMenu>

      <ItemMenu className="ripple pulse" data-tip="general posts">
        <img src={postsSVG} alt="posts" />
      </ItemMenu>
      <ItemMenu className="ripple pulse" data-tip="users">
        <img src={usersSVG} alt="users" />
      </ItemMenu>
    </Container>
  );
};

export default SideMenu;
