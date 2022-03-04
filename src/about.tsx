import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <>
      <Flex flexDir={'column'} p={20}>
        <Text fontWeight={600} fontSize={55} color="blue.900">
          About
        </Text>
        <Text mt={10} fontWeight={200} fontSize={30}>POPOS are publicly accessible spaces in
        forms of plazas, terraces, atriums, small
        parks, and even snippets which are provided
        and maintained by private developers. In San
        Francisco, POPOS mostly appear in the Downtown
        office district area.</Text>
      </Flex>
    </>
  );
};

export default About;
