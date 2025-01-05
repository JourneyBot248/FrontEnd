import React from "react";
import { Flex, Heading} from "@chakra-ui/react";

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

    </Flex>
  </Flex>
);

export default Header;