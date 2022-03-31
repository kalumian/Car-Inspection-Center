import { DataProider } from "./DataContext";
import { CookiesProvider } from "react-cookie";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <DataProider>
        <App />
      </DataProider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
