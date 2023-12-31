import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import { Navbar } from "../components/Navbar";
import { ConversionsTable } from "../components/ConversionsTable";
import { useAppSelector } from "../store/hooks";
import { ConversionForm } from "../components/ConversionForm";
import Layout from "../components/Layout";
import { CoinForm } from "../components/CoinForm";

const Update = () => {
  const conversions = useAppSelector((state) => state.conversions.data);
  const coins = useAppSelector((state) => state.coins.data);
  return (
    <Layout>
      <Navbar />
      <Heading>Conversion Table</Heading>
      <ConversionsTable data={conversions} />
      <Grid columns="2" gap="3" width="auto" align="start" justify="start">
        <CoinForm />
        <ConversionForm coins={coins} />
      </Grid>
    </Layout>
  );
};

export default Update;
