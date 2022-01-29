import { DataProider } from "./DataContext";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <DataProider>
      <App />
    </DataProider>
  </React.StrictMode>,
  document.getElementById("root")
);
