import { Polygon, DEFAULT_SUPPORTED_CHAINS, NativeCurrency } from "@usedapp/core";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Mainnet, DAppProvider, Config } from "@usedapp/core";
import { getDefaultProvider, providers } from "ethers";

//const polygon_rpc_provider = new providers.JsonRpcProvider(Polygon.rpcUrl)
const polygon_rpc_provider = new providers.JsonRpcProvider(
  "https://polygon-rpc.com"
);
const eth_rpc_provider = new providers.JsonRpcProvider(
  "https://rpc.ankr.com/eth"
);

const config: Config = {
  readOnlyUrls: {
    [Polygon.chainId]: polygon_rpc_provider,
  },
  
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
