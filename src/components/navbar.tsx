import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Flex w='100%' p={4} color='white' pos='absolute' top={0}>
        <Text fontSize={25}>SFPopops</Text>
      </Flex>
    </>
  );
};

export default Navbar;
