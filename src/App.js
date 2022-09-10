import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState(null);
  const handleClick = async () => {
    console.log("entro a click");
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        setAccount(accounts);
      });
    window.ethereum.on("accountsChanged", function (accounts) {
      console.log("cambio cuenta", accounts);
    });

    window.ethereum.on("chainChanged", function (chain) {
      console.log("cambio cambio la cadena", chain);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {account ? (
          <p>account: {account}</p>
        ) : (
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App;
