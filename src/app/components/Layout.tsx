import { Container, Flex } from "@radix-ui/themes";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <Container>
      <Flex direction="column" gap="6">
        {props.children}
      </Flex>
    </Container>
  );
};

export default Layout;
