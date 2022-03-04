import { Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
//Components

const App = () => {
  return (
    <>
      <Flex flexDir={['column', 'column', 'row', 'row']} w={'100%'} h='100vh'>
        <Navbar />
        <Outlet />
      </Flex>
    </>
  );
};
export default App;
