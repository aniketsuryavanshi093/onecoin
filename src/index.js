import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/consfigureStore";
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "./utils/getLibrary";
import "./assets/styles/index.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
