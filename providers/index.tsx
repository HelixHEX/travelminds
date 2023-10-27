"use client";
import { CacheProvider } from "@chakra-ui/next-js";

import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Josefin_Sans } from "next/font/google";
import { theme } from "./theme";
const josefinSans = Josefin_Sans({subsets: ['latin']});

const Providers: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-josefin: ${josefinSans.style.fontFamily};
          }
        `}
      </style>
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </>
  );
};

export default Providers;
