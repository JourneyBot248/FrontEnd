import React from "react";
import { Flex, Heading, Link, Button } from "@chakra-ui/react";

const Header = () => (
  <Flex
    as="header"
    justify="space-between"
    align="center"
    p="4"
    bg="White"
    borderBottom="1px solid gray"
  >
    <Heading size="lg" color="mint">
      Trip Planner
    </Heading>
    <Flex gap="6" align="center">
      {/* <Link href="#" fontWeight="bold" color="gray.800">
        Features
      </Link> */}
      <Button colorScheme=" Mint">Beta Version</Button>
    </Flex>
  </Flex>
);

export default Header;