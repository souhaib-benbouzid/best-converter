import { Flex, Box } from "@radix-ui/themes";
import { useState } from "react";
import { Conversion } from "../types";
import { conversions as conversionsData } from "../data";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addCoin } from "../store/slices";

export default function Landing() {
  const [conversions, setConversions] = useState<Conversion[]>(conversionsData);
  const [bestMethod, setBestMethod] = useState<string>("");
  const coins = useAppSelector((state) => state.coins.data);
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
      <Box width="9" height="9">
        <Flex direction="column" gap="1">
          {conversions.map((conversion) => (
            <Flex id={conversion.id}>
              <pre>
                <code>{JSON.stringify(conversion, null, 2)}</code>
              </pre>
            </Flex>
          ))}
        </Flex>
        <Flex direction="column" gap="1">
          {coins.map((coin) => (
            <Flex id={coin.code}>
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
