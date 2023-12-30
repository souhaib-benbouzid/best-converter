import { Card, Flex, Link as RadixLink } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { locations } from "../router";

export const Navbar = () => {
  return (
    <Card variant="surface">
      <nav>
        <Flex gap="3" justify="center" align="center">
          <RadixLink asChild>
            <Link to={locations.landing}>Dashboard</Link>
          </RadixLink>
          <RadixLink asChild>
            <Link to={locations.update}>Update</Link>
          </RadixLink>
        </Flex>
      </nav>
    </Card>
  );
};
