import React from "react";
import "./App.css";
import { Button, ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Layout from "./../components/Layout";
import ConnectButton from "./../components/ConnectButton";
import AccountModal from "./../components/AccountModal";
import { useSendTransaction } from "@usedapp/core";
import { utils } from "ethers";

function PaymentGateway() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { sendTransaction } = useSendTransaction();

  const sendMoney = () => {
    sendTransaction({
      to: "0xB9456E9c4beA5ed9F2bc85D2Eb64e8FA26441f70",
      value: utils.parseUnits("0.00001", "mwei"),
    });
  };

  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
        <Button onClick={sendMoney} />
      </Layout>
    </ChakraProvider>
  );
}

export default PaymentGateway;
