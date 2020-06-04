import React, { useEffect } from "react";

import { Container } from "./styles";
import upImage from "../../assets/images/up48.svg";

function FloatButton() {
  useEffect(() => {
    const footer = document.querySelector(".footer");
    const upButton = document.querySelector(".up-button");
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          upButton.classList.add("up");
        } else {
          upButton.classList.remove("up");
        }
      })
    );
    observer.observe(footer);
  }, []);
  return (
    <a href="#root">
      <Container className="ripple pulse up-button">
        <img src={upImage} alt="" />
      </Container>
    </a>
  );
}

export default FloatButton;
