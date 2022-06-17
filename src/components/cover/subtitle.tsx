import { Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes(`
  0% {
    transform: translateX(30px);
    opacity: 0;
  }
  100% {
    transform: 0;
    opacity: 1;
  }
`);

export function Subtitle() {
  return (
    <Text
      pb="20px"
      color="gray.500"
      fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
      fontWeight="semibold"
      animation={`${fadeIn} 1s`}
    >
      Living, learning, developing
    </Text>
  );
}
