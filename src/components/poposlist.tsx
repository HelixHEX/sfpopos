import { Flex } from "@chakra-ui/react";
import React from "react";
import { sfpopos } from "../constants/sfpopos-data";
import PoposCard from "./poposcard";

type Props = {
  filter: string;
}
const PoposList = ({filter}: Props) => {
  return (
    <>
      <Flex mt={10} flexDir={"column"} w="100%">
        {sfpopos.filter(data => data.title.includes(filter) || data.address.includes(filter)).map((data, index) => (
          <PoposCard view="list" index={index} data={data} key={index} />
        ))}
      </Flex>
    </>
  );
};

export default PoposList;
