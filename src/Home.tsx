import { Flex, Icon, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import PoposGrid from "./components/poposgrid";
import { BsListTask, BsFillGrid3X3GapFill } from "react-icons/bs";
import PoposList from "./components/poposlist";
import "./styles.css";

const Home = () => {
  const [gridView, setGridView] = useState(true);
  const [search, setSearch] = useState("");
  return (
    <>
      <Flex w="100%" flexDir="column">
        <Flex
          pos="fixed"
          zIndex={-1}
          pr={[50, 100]}
          justifyContent={"space-between"}
          pl={[50, 100]}
          flexDir={"row"}
          w={"100%"}
          h="100vh"
          bgGradient="linear(to-br, gray.900, black)"
        >
          <Flex flexDir="column" alignSelf={"center"}>
            <Text
              color="white"
              w={["auto", "auto", 550]}
              fontSize={[50, 50, 70]}
            >
              Discover Public Spaces Near You
            </Text>
          </Flex>
          <Image
            display={["none", "none", "none", "none", "flex"]}
            alignSelf={"center"}
            boxShadow={"2xl"}
            src={require("./assets/images/banner.jpg")}
            w={500}
            h={500}
          />
        </Flex>

        <Flex
          // pos="absolute"
          flexDir={"column"}
          mt={"100vh"}
          zIndex={1}
          pb={20}
          pt={10}
          pr={[5, 100]}
          pl={[5, 100]}
          w="100%"
          bg="gray.50"
        >
          <Input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search space"
            w={"100%"}
          />

          <>
            <Flex mt={5} justifyContent={"space-between"}>
              <Text color="blue.900" fontWeight={600} fontSize={40}>
                Public Spaces
              </Text>
              <Icon
                _hover={{ cursor: "pointer" }}
                onClick={() => setGridView(!gridView)}
                color="blue.900"
                alignSelf={"center"}
                as={gridView ? BsListTask : BsFillGrid3X3GapFill}
                w={35}
                h={35}
              />
            </Flex>
            {gridView ? (
              <PoposGrid filter={search} />
            ) : (
              <PoposList filter={search} />
            )}
          </>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
