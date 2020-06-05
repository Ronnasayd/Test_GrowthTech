import React from "react";

import { Container } from "./styles";
import { useDocumentReady } from "../../Hooks";

function Footer() {
  useDocumentReady(() => {
    setTimeout(() => {
      const footer = document.querySelector(".footer");
      footer.style.display = "block";
    }, 500);
  });

  return <Container className="footer">Created by Ronnasayd</Container>;
}

export default Footer;
