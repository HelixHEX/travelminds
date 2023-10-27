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
import { FiSearch } from "react-icons/fi";
/* CHANGE TO NEXT IMAGE WHEN BUG IS FIXED */
// import { Image } from "@chakra-ui/next-js";

export default function Home() {
  return (
    <Flex w="100%" minH="100vh" h={"auto"}>
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
              "Start by asking our AI travel agent where you'd like to go, and we'll cover the rest"
            }
          </Text>
          {/* <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em">
                $
              </InputLeftElement>
            <Input placeholder="Enter amount" />
            <InputRightElement>
              <FiSearch color="green.500" />
            </InputRightElement>
          </InputGroup> */}
          <InputGroup rounded="full" bg="white">
            <Input
              h={12}
              pr={8}
              color="gray.700"
              placeholder="Start typing...✨"
              bg="white"
              // w="100%"
              // h='100%'
              rounded="full"
              // border='none'
            />
            <InputRightElement
            // _hover={{ curs }}
            mt={1}
            mr={2}
            >
              <Button
                // bg="black"
                rounded="full"
                variant="ghost"
                _hover={{ color: "white", bg: 'black' }}
              >
                <Icon as={FiSearch} />
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
        <Box
          zIndex={-1}
          pos="fixed"
          w="100%"
          h="100vh"
          bg="gray.600"
          opacity={"0.3"}
        />
        <Image
          zIndex={-2}
          pos="fixed"
          w="100%"
          h="100vh"
          src="/travelbanner.jpg"
          alt="Travel image background image"
        />
      </Center>
    </Flex>
  );
}
