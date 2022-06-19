import { Box, Text, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: string;
}

export function Title({ children }: Props) {
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
      <Text
        as="h2"
        fontSize="5xl"
        lineHeight="none"
        transform="translateY(-50px)"
      >
        {children}
      </Text>
    </Box>
  );
}
