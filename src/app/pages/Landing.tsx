import { Flex, Box } from "@radix-ui/themes";
import { Conversion } from "../types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Navbar } from "../components/Navbar";
import { ConversionsTable } from "../components/ConversionsTable";
import Layout from "../components/Layout";
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
    <Layout>
      <Navbar />
      <ConversionsTable data={conversions} />
      <Box width="9" height="9">
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
    </Layout>
  );
}
