"use client";
import { CacheProvider } from "@chakra-ui/next-js";

import { ChakraProvider as Provider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Josefin_Sans } from "next/font/google";
import { theme } from "./theme";
const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const ChakraProvider: React.FC<PropsWithChildren> = ({
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
        <Provider theme={theme}>{children}</Provider>
      </CacheProvider>
    </>
  );
};

export default ChakraProvider;
