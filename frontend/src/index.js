import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./styles";
import AppRouter from "./Router";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
