import { Button, Box, Text, Center } from "@chakra-ui/react";
import {
  useEthers,
  useEtherBalance,
  Polygon,
  useTokenBalance,
} from "@usedapp/core";
import { formatEther, formatUnits } from "@ethersproject/units";
import Identicon from "./Identicon";

type Props = {
  handleOpenModal: any;
};

export default function ConnectButton({ handleOpenModal }: Props) {
  const { activateBrowserWallet, account } = useEthers();

  const etherBalance = useTokenBalance(
    "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    account
  );


  return account ? (
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      py="0"
    >
      <Box px="3">
        <Text color="white" fontSize="md">
          {etherBalance && formatUnits(etherBalance, "mwei")} USDC
        </Text>
      </Box>

      <Button
        onClick={handleOpenModal}
        bg="gray.800"
        border="1px solid transparent"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Identicon />
      </Button>
    </Box>
  ) : (
  <div></div>
  );
}
