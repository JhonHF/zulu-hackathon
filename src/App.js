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

  const makeTransfer = async () => {
    // txHash is a hex string
    // As with any RPC call, it may throw an error
    window.ethereum
      .request({
        method: "eth_sendTransaction",
        params: [{
        /*   nonce: "0x00", // ignored by MetaMask */
        /*   gasPrice: "0x09184e72a000", // customizable by user during MetaMask confirmation.
          gas: "0x2710", // customizable by user during MetaMask confirmation. */
          to: "0xB9456E9c4beA5ed9F2bc85D2Eb64e8FA26441f70", // Required except during contract publications.
          from: account[0], // must match user's active address.
            value: "0x38D7EA4C68000", // Only required to send ether to the recipient from the initiating external account. */
      /*     chainId: "0x3", // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask. */
        }],
      })
      .then((hash) => console.log("este es el hash de la transa", hash))
      .catch((err) => console.log("hubo un error de la transa", err));
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
      <button onClick={makeTransfer}>hacer transaccion</button>
    </div>
  );
}

export default App;
