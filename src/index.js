import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./styles/GlobalStyle";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
      <div id="modal-root"></div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
