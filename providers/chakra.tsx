"use client";
import { CacheProvider } from "@chakra-ui/next-js";

import { ChakraProvider as Provider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { theme } from "./theme";

const ChakraProvider: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return (
    <>
      <CacheProvider>
        <Provider theme={theme}>{children}</Provider>
      </CacheProvider>
    </>
  );
};

export default ChakraProvider;
