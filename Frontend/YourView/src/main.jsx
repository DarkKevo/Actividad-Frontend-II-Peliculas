import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
/* import App from "./App"; */
import App from './Practica/App'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
      {/* <BrowserRouter>
        <App />
      </BrowserRouter> */}
  </React.StrictMode>
);
