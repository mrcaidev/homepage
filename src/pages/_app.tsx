import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { TopBar } from "src/components/top-bar";
import { theme } from "src/themes/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <TopBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
