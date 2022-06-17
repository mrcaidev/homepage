import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { toKebabCase } from "src/utils/to-kebab-case";

interface Props {
  children: string;
}

export function Title({ children }: Props) {
  const id = toKebabCase(children);
  const bgGradient = useColorModeValue(
    "linear(to-t, transparent 0%, gray.300 100%)",
    "linear(to-t, transparent 0%, gray.700 100%)"
  );

  return (
    <Box textAlign="center" userSelect="none">
      <Text
        fontSize="7xl"
        fontWeight="bold"
        bgGradient={bgGradient}
        bgClip="text"
        overflowWrap="initial"
      >
        {children}
      </Text>
      <Heading id={id} as="h2" fontSize="5xl" transform="translateY(-50px)">
        {children}
      </Heading>
    </Box>
  );
}
