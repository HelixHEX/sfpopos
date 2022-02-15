import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <>
      <Flex flexDir='column'>
        {/* <Flex
          pr={100}
          justifyContent={"space-between"}
          pl={100}
          flexDir={"row"}
          w={"100%"}
          h="100vh"
          bgGradient="linear(to-br, gray.900, black)"
        >
          <Flex flexDir='column' alignSelf={"center"}>
            <Text color="white" w={550} fontSize={70}>
              Discover Public Spaces Near You
            </Text>
            <Button _hover={{bg: "purple.800",color: 'white'}} w={200} h={55} bg='purple.500' color='white' rounded={0}>Find Spaces</Button>
          </Flex>
          <Image
            alignSelf={"center"}
            boxShadow={"2xl"}
            src={require("./assets/images/banner.jpg")}
            w={500}
            h={500}
          />
        </Flex> */}
        <Flex pt={10} pr={100} pl={100} w='100%' bg='gray.200'>
          <Text color='blue.900' fontWeight={600} fontSize={40}>Public Spaces</Text>
        </Flex>
      </Flex>
    </>
  );
};
export default Home;
