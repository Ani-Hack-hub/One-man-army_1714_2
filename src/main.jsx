import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./App.jsx";
import Headbar from "./templates/Headbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Headbar />
    <Body></Body>
  </React.StrictMode>
);
