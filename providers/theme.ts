import { extendTheme } from "@chakra-ui/react";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const theme = extendTheme({
  fonts: {
    heading: josefinSans.style.fontFamily,
    body: josefinSans.style.fontFamily
  },
});
