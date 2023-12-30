import { Flex, Box } from "@radix-ui/themes";
import { Conversion } from "../types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Navbar } from "../components/Navbar";

export default function Landing() {
  const coins = useAppSelector((state) => state.coins.data);
  const conversions = useAppSelector((state) => state.conversions.data);
  const dispatch = useAppDispatch();

  const handleApplyConversion = (amount: number, conversion: Conversion) => {
    const result = amount * conversion.rate - conversion.fee;

    return {
      code: conversion.to,
      result,
    };
  };

  return (
    <Flex direction="column" gap="3">
      <Navbar />
      <Box width="9" height="9">
        <Flex direction="column" gap="1">
          {conversions.map((conversion) => (
            <Flex key={conversion.id}>
              <pre>
                <code>{JSON.stringify(conversion, null, 2)}</code>
              </pre>
            </Flex>
          ))}
        </Flex>
        <Flex direction="column" gap="1">
          {coins.map((coin) => (
            <Flex key={coin.code}>
              <pre>
                <code>{JSON.stringify(coin, null, 2)}</code>
              </pre>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
