"use client";
import { useGenerateTravelDetails } from "@/lib/api/mutation";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  NumberInput,
  NumberInputField,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState, CSSProperties } from "react";
import { FiSearch } from "react-icons/fi";
import ClipLoader from "react-spinners/ClipLoader";

/* CHANGE TO NEXT IMAGE WHEN BUG IS FIXED */
// import { Image } from "@chakra-ui/next-js";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

export default function Home() {
  const [destination, setDestination] = useState<string>("");
  const [budget, setBudget] = useState<any>();
  const { mutate, data, isPending } = useGenerateTravelDetails();

  return (
    <>
      <Center w="100%" h="100vh">
        <VStack color="white" spacing={10}>
          <VStack>
            <Heading fontSize={32}>Ask yourself</Heading>
            <Heading textAlign={"center"} fontSize={100} w={800}>
              {"What's the next adventure?"}
            </Heading>
          </VStack>
          <Text>
            {
              "Start by asking our AI travel agent where you'd like to go and your budegt, and we'll cover the rest"
            }
          </Text>
          <Flex flexDir={"column"} bg="white" rounded={10} w="100%">
            <InputGroup>
              <Input
                h={12}
                pr={8}
                disabled={isPending}
                color="gray.700"
                placeholder="Enter your dream destination...✨"
                bg="white"
                rounded={10}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              <InputRightElement mt={1} mr={2}>
                <Button
                  onClick={() => mutate({ destination, budget })}
                  disabled={isPending || destination.length < 0 || budget != 0}
                  rounded={10}
                  variant="ghost"
                  _hover={{ color: "white", bg: "black" }}
                >
                  {isPending ? (
                    <ClipLoader
                      color={"#fff"}
                      loading={true}
                      cssOverride={override}
                      size={150}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  ) : (
                    <Icon as={FiSearch} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            {destination.length > 0 ? (
              <>
                <Divider />
                <VStack mt={4}>
                  <Heading
                    ml={2}
                    alignSelf={"start"}
                    fontSize={14}
                    color="gray.700"
                  >
                    Budget{" "}
                  </Heading>
                  <NumberInput
                    color="gray.700"
                    value={budget}
                    onChange={(val) => setBudget(val)}
                    w="100%"
                    placeholder="$0"
                    isDisabled={isPending}
                  >
                    <NumberInputField w="100%" />
                  </NumberInput>
                </VStack>
              </>
            ) : null}
          </Flex>
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
      {!isPending && data && (
        <Box p={10} id="results" w="100%" h="100vh">
          <Heading fontSize={40} textAlign={"center"}>
            Trip Summary
          </Heading>
          <Image
            mt={10}
            rounded={10}
            w={"100%"}
            h={400}
            alt="Destination image"
            src={data.formattedResponse.destinationImgURL}
            // src={data.formattedResponse.destinationImgURL}
          />
          <Heading mt={10} fontSize={32}>
            {destination}
          </Heading>
          <Heading mt={4} fontSize={18}>
            Budget: <span>${budget}</span>
          </Heading>
          {/* <Text mt={4}>{data.rawResponse}</Text> */}
          {data.formattedResponse.itinerary.map((list: any, index: number) => (
            <div key={index}>
              <Text mt={4}>- {list}</Text>
              <br></br>
            </div>
          ))}
          <Button
            mt={4}
            mb={10}
            variant="ghost"
            _hover={{ bg: "black", color: "white" }}
            size="md"
            color="gray.800"
          >
            Book Now
          </Button>
        </Box>
      )}
      {/* {fetched && <Flex w="100%" h="100vh"></Flex>} */}
    </>
  );
}
