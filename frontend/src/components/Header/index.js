import React from "react";
import { Container, Logo } from "./styles";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} />
      </Link>
    </Container>
  );
}

export default Header;
