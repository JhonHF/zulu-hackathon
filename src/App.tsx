import React from "react";
import "./App.css";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import PaymentGateway from "./pages/PaymentGateway";
import ConnectToWallet from "./pages/ConnectToWallet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
        <Router>
          <Routes>
            <Route path="/payment_gateway" element={<PaymentGateway />}></Route>
            <Route path="/connect_to_wallet" element={<ConnectToWallet/>}></Route>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </Router>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
