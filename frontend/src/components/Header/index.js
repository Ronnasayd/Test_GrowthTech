import React from "react";
import { Container, Logo, Networks } from "./styles";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";

function Header() {
  return (
    <Container className="header">
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Networks>
        <a
          href="https://github.com/Ronnasayd"
          target="_blank"
          rel="noopener noreferrer"
          className="pulse"
        >
          <img src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/ronnasayd/"
          target="_blank"
          rel="noopener noreferrer"
          className="pulse"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </Networks>
    </Container>
  );
}

export default Header;
