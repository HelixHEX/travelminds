"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
/* CHANGE TO NEXT IMAGE WHEN BUG IS FIXED */
// import { Image } from "@chakra-ui/next-js";

export default function Home() {
  const [fetched, setFetched] = useState<boolean>(false);
  return (
    <Flex flexDir={"column"} w="100%" minH="100vh" h={"auto"}>
      <Center w="100%" h="100vh">
        <VStack color="white" spacing={10}>
          <VStack>
            <Heading fontSize={32}>Ask yourself</Heading>
            <Heading textAlign={"center"} fontSize={100} w={800}>
              {"What's the next adventure?"}
            </Heading>
          </VStack>
          <Text fontSize={20}>
            {
              "Start by asking our AI travel agent where you'd like to go and your budegt, and we'll cover the rest"
            }
          </Text>
          <InputGroup rounded="full" bg="white">
            <Input
              h={12}
              pr={8}
              color="gray.700"
              placeholder="Start typing...✨"
              bg="white"
              rounded="full"
            />
            <InputRightElement
              mt={1}
              mr={2}
            >
              <Button
              onClick={() => setFetched(!fetched)}
                rounded="full"
                variant="ghost"
                _hover={{ color: "white", bg: "black" }}
              >
                <Icon as={FiSearch} />
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
        <Box
          zIndex={-1}
          pos="absolute"
          w="100%"
          h="100vh"
          bg="gray.600"
          opacity={"0.3"}
        />
        <Image
          zIndex={-2}
          pos="absolute"
          w="100%"
          h="100vh"
          src="/travelbanner.jpg"
          alt="Travel image background image"
        />
      </Center>
      {fetched && <Flex w="100%" h="100vh"></Flex>}
    </Flex>
  );
}
