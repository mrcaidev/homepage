import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

interface Props {
  id: string;
  children: string;
}

export function Title({ id, children }: Props) {
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
