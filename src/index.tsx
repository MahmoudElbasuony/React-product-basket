import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createGlobalStore } from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createGlobalStore()}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
