"use client";

import { PropsWithChildren } from "react";
import ChakraProvider from "./chakra";
import ReactQueryProvider from "./reactQuery";

const Providers: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return (
    <>
      <ChakraProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </ChakraProvider>
    </>
  );
};

export default Providers;
