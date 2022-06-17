import { Heading } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes(`
  0% {
    transform: translateX(-30px);
    opacity: 0;
  }
  100% {
    transform: 0;
    opacity: 1;
  }
`);

export function Title() {
  return (
    <Heading
      as="h2"
      pb="10px"
      fontSize={{ base: "3xl", sm: "4xl", lg: "5xl", xl: "6xl" }}
      animation={`${fadeIn} 1s`}
    >
      Hi, I am Yuwang Cai
    </Heading>
  );
}
