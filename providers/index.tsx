"use client";

import { PropsWithChildren } from "react";
import ChakraProvider from "./chakra";

const Providers: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return (
    <>
      <ChakraProvider>{children}</ChakraProvider>
    </>
  );
};

export default Providers;
