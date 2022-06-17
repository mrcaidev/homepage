import { Square } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import miku from "public/miku.png";

const fadeIn = keyframes(`
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: 0;
    opacity: 1;
  }
`);

export function Picture() {
  return (
    <Square
      size={{ base: "200px", sm: "250px", lg: "300px" }}
      rounded="3xl"
      overflow="hidden"
      animation={`${fadeIn} 1s`}
    >
      <Image src={miku} alt="Kawaii miku" placeholder="blur" />
    </Square>
  );
}
