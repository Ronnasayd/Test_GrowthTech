import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);

const script = document.createElement("script");
script.src = "/ripple.js";
script.async = true;
document.body.appendChild(script);
