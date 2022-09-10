import React from "react";
import Layout from "./../components/Layout";
import { useEthers, useSendTransaction } from "@usedapp/core";
import { Button, Center } from "@chakra-ui/react";
import { useNavigate  } from "react-router-dom";


function PaymentGateway() {

  const { activateBrowserWallet } = useEthers();
  const navigate = useNavigate();


  function handleConnectWallet() {
    activateBrowserWallet();
    navigate("/payment_gateway")

  }

  return (
    <>
    <Center>
      <Button onClick={handleConnectWallet}>Conectar la billetera</Button>
    </Center>
    </>
  );
}

export default PaymentGateway;
