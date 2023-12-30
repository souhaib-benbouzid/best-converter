import { Box, Flex } from "@radix-ui/themes";
import { Navbar } from "../components/Navbar";

const Update = () => {
  return (
    <Flex direction="column" gap="3">
      <Navbar />
      <Box width="9" height="9">
        update
      </Box>
    </Flex>
  );
};

export default Update;
