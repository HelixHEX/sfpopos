import {
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'

type Props = {
  isOpen?: any;
  onClose?: any;
  data: {
    title: string;
    desc: string;
    address: string;
    hours: string;
    geo: {
      lat: number;
      lon: number;
    };
    images: string[];
    website?: string;
    features: string[];
    opens?: string;
    closes?: string;
  };
  index: number;
  view: string;
};
const PoposCard = ({ data, index, view }: Props) => {
  const navigate = useNavigate();
  if (view === "grid") {
    return (
      <>
        <Flex onClick={() => navigate(`/space/${index}`)} color='blue.700' rounded={10}  p={5} flexDir={"column"}>
          <motion.div whileTap={{ scale: 0.95 }} whileHover={{scale: 1.1}}>
          <Image
            _hover={{ cursor: "pointer" }}
            rounded={10}
            src={require(`../assets/images/${data.images[0]}`)}
          />
          </motion.div>
          <Text
            _hover={{ cursor: "pointer", color: "blue.900" }}
            
            fontSize={25}
            fontWeight={700}
            mt={5}
          >
            {data.title}
          </Text>
        </Flex>
      </>
    );
  } else {
    return (
      <>
        <Flex onClick={() => navigate(`/space/${index}`)}  color='blue.700' _hover={{bg: 'blue.700', color: 'white', cursor: 'pointer'}} p={2} bg={index % 2 === 0 ? 'gray.50' : 'gray.200'} mb={10}>
          <Image
            w={75}
            h={75}
            _hover={{ cursor: "pointer" }}
            rounded={0}
            src={require(`../assets/images/${data.images[0]}`)}
          />
          <Text alignSelf='center' fontWeight={200} ml={3} fontSize={25} >{data.title}</Text>
        </Flex>
      </>
    );
  }
};

export default PoposCard;
