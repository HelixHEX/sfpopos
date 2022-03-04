import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { sfpopos } from "./constants/sfpopos-data";

const Space = () => {
  const params = useParams();
  let { id } = params;
  const data = sfpopos.find((_, index) => JSON.stringify(index) === id);
  if (!data) return <Text>Unable to find Space</Text>;
  return (
    <>
    
      <Flex w="100%"  p={[5, 5, 5, 10, 20]}>
        <Flex flexDir={['column', 'column', 'row', 'row']} alignSelf={["start", 'start', 'center', 'center']}>
          <Image
            w={400}
            h={400}
            src={require(`./assets/images/${data.images[0]}`)}
          />
          <Flex mb={[10, 10, 0, 0]} mt={[10, 10, 0, 0]} ml={[0, 0, 10, 10]} flexDir={"column"}>
            <Text fontWeight={600} color="blue.900" fontSize={35}>
              {data.title}
            </Text>
            <Text fontWeight={200} fontSize={20}>
              {data.desc}
            </Text>
            <Flex mt={5} fontSize={20}>
              <Text color="blue.900" fontWeight={500}>
                Address:{" "}
              </Text>
              <Text ml={2}>{data.address}</Text>
            </Flex>
            <Flex mt={5} fontSize={20}>
              <Text color="blue.900" fontWeight={500}>
                Hours:{" "}
              </Text>
              <Text ml={2}>{data.hours}</Text>
            </Flex>
            <Flex mt={5} fontSize={20}>
              <Text color="blue.900" fontWeight={500}>
                Location:{" "}
              </Text>
              <Flex ml={2}>
                <Text>{data.geo.lat}</Text>
                <Text>{data.geo.lon}</Text>
              </Flex>
            </Flex>
            <Flex mt={5} fontSize={20}>
              <Text color="blue.900" fontWeight={500}>
                Website:{" "}
              </Text>
              <Text ml={2}>{data.website}</Text>
            </Flex>
            <Flex mt={5} fontSize={20}>
              <Text color="blue.900" fontWeight={500}>
                Features:{" "}
              </Text>
              <Flex ml={2} flexDir={'column'}>
              {data.features.map((feature, index) => (
                <>
                <Text>{index + 1}. {feature}</Text>
                </>
              ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Space;
