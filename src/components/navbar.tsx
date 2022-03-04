import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <MobileNav />
      <Flex
        // ml={10}
        display={["none", "none", "flex", "flex"]}
        pos="fixed"
        zIndex={2}
        bg="gray.900"
        w="100%"
        h={45}
        color="white"
        // top={0}
      >
        <Text ml={10} fontSize={25}>
          SFPopops
        </Text>
        <Flex ml={20}>
          <MenuItem route={"/"} text={"Home"} />
          <MenuItem route={"/about"} text={"About"} />
          <MenuItem route={"/random"} text={"Random"} />
        </Flex>
      </Flex>
    </>
  );
};

type MenuProps = {
  text: string;
  route: string;
};
const MenuItem = ({ text, route }: MenuProps) => {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        style={{ alignSelf: "center" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Flex
          onClick={() => navigate(route)}
          _hover={{ cursor: "pointer" }}
          ml={10}
        >
          <Text fontWeight={200} fontSize={20}>
            {text}
          </Text>
        </Flex>
      </motion.div>
    </>
  );
};

const MobileNav = () => {
  return (
    <>
        <Flex p={2} display={["flex", "flex", "none", "none"]}>
          <Icon
            _hover={{ cursor: "pointer" }}
            as={AiOutlineMenu}
            w={35}
            h={35}
          />
        </Flex>
    </>
  );
};

export default Navbar;
