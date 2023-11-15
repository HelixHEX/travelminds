"use client";
import { useGenerateTravelDetails } from "@/lib/api/mutation";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
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
import { useState, CSSProperties, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import ClipLoader from "react-spinners/ClipLoader";
const Fade = require("react-reveal/Fade");
const Zoom = require("react-reveal/Zoom");
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
  const ref = useRef<null | HTMLDivElement>(null);

  const { mutate, data, isPending } = useGenerateTravelDetails({ ref });

  useEffect(() => {
    if (!isPending) {
      if (data) {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [data, isPending]);
  return (
    <>
      <Center w="100%" h="100vh" p={{ base: 4 }}>
        <VStack color="white" spacing={10}>
          <VStack>
            <Heading fontSize={{ base: 20, md: 32 }}>Ask yourself</Heading>
            <Heading
              textAlign={"center"}
              fontSize={{ base: 40, md: 100 }}
              w={{ base: "100%", md: 800 }}
            >
              {"What's the next adventure?"}
            </Heading>
          </VStack>
          <Text w={{ base: "100%", md: "auto" }} textAlign={"center"}>
            {
              "Start by asking our AI travel agent where you'd like to go and your budget, and we'll cover the rest"
            }
          </Text>
          <Flex
            flexDir={"column"}
            bg="white"
            rounded={10}
            w={{ base: "100%", md: "100%" }}
          >
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
                  <Icon as={FiSearch} />
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
          {!isPending && data && (
            <Heading size="sm">Scroll down to see trip details!</Heading>
          )}
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
        <Box
          pb={100}
          ref={ref}
          p={{ base: 4, md: 10 }}
          id="results"
          w="100%"
          h="100vh"
        >
          {/* <Fade>
            <Heading fontSize={40} textAlign={"center"}>
              Trip Summary
            </Heading>
          </Fade> */}

          <Flex flexDir={{ base: "column", md: "row" }}>
            <Zoom>
              <Image
                rounded={10}
                w={{ base: "100%", md: 400 }}
                h={400}
                alt="Destination image"
                src={data.formattedResponse.destinationImgURL}
                // src={data.formattedResponse.destinationImgURL}
              />
            </Zoom>
            <Flex
              h={400}
              mt={{ base: 4, md: 0 }}
              flexDir={"column"}
              ml={{ base: 0, md: 4 }}
              justifyContent={"space-between"}
            >
              <Box>
                <Heading fontSize={40}>{destination}</Heading>
                {/* <Fade> */}
                <Heading mt={4} w={{ base: "100%", md: 500 }} size="sm">
                  {data.formattedResponse.itinerary[0]}
                </Heading>
                {/* </Heading> */}
                <Fade>
                  <Heading size="sm" mt={4}>
                    Budget: <span style={{ fontWeight: "400" }}>${budget}</span>
                  </Heading>
                </Fade>
                <Heading mt={4} size="sm">
                  Select dates
                </Heading>
                <HStack>
                  <Box>
                    <Heading mt={2} fontSize={12}>
                      Depart
                    </Heading>
                    <Input
                      w={40}
                      mt={2}
                      placeholder="Select Date and Time"
                      size="md"
                      type="date"
                    />
                  </Box>
                  <Box>
                    <Heading mt={2} fontSize={12}>
                      Arrive
                    </Heading>
                    <Input
                      w={40}
                      mt={2}
                      placeholder="Select Date and Time"
                      size="md"
                      type="date"
                    />
                  </Box>
                </HStack>
              </Box>
              {/* <Fade> */}
              <Button
                // alignSelf={"end"}
                // mt={4}
                // mb={10}
                variant="ghost"
                _hover={{ bg: "black", color: "white" }}
                size="md"
                w="100%"
                color="gray.800"
              >
                Book Now
              </Button>
              {/* </Fade> */}
            </Flex>
          </Flex>
          <Fade>
            <Heading mt={10} fontSize={32}>
              Itinerary
            </Heading>
          </Fade>

          {/* <Text mt={4}>{data.rawResponse}</Text> */}
          <Fade>
            {data.formattedResponse.itinerary
              .slice(1)
              .map((list: any, index: number) => (
                <div key={index}>
                  <Text mt={4}>- {list}</Text>
                  <br></br>
                </div>
              ))}
          </Fade>
        </Box>
      )}
      {/* {fetched && <Flex w="100%" h="100vh"></Flex>} */}
    </>
  );
}
