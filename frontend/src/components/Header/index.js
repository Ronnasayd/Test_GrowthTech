import React from "react";
import { Container, Logo } from "./styles";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  );
}

export default Header;
