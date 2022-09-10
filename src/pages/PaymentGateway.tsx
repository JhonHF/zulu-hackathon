import React from "react";
import { useSendTransaction } from "@usedapp/core";
import { utils } from "ethers";
import { Button, Text } from "@chakra-ui/react";
import { Center,  } from "@chakra-ui/react";

function PaymentGateway() {
  const { sendTransaction } = useSendTransaction();

  const sendMoney = () => {
    sendTransaction({
      to: "0xB9456E9c4beA5ed9F2bc85D2Eb64e8FA26441f70",
      value: utils.parseUnits("0.00001", "mwei"),
    });
  };

  return (
    <>
      <Center bg="#2D3748" h="100px" color="Black" marginLeft={100} marginRight={100} marginBottom={100}>
        <Text fontSize={30} color="yellow.300">Estas a punto de enviar 2 dolares</Text>
      </Center>
      <Center marginTop="0" >
        <Button fontSize={40} height={20} width={400} onClick={sendMoney}>Enviar</Button>
      </Center>
    </>
  );
}

export default PaymentGateway;
