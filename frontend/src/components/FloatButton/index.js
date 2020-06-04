import React from "react";

import { Container } from "./styles";
import upImage from "../../assets/images/up48.svg";

function FloatButton() {
  return (
    <a href="#root">
      <Container className="ripple pulse">
        <img src={upImage} alt="" />
      </Container>
    </a>
  );
}

export default FloatButton;
