import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import detectEthereumProvider from "@metamask/detect-provider";

const root = ReactDOM.createRoot(document.getElementById("root"));

const startApp = async () => {
  const provider = await detectEthereumProvider();

  if (provider) {
    // From now on, this should always be true:
    // provider === window.ethereum
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    root.render(
      <React.StrictMode>
        <h1>debes tener metamask</h1>
      </React.StrictMode>
    );
  }
};

startApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
