import { Box, Flex, Progress, Text, useColorModeValue } from "@chakra-ui/react";
import { TopLang } from "src/models/stats.model";

export function Lang({ color, name, percentage }: TopLang) {
  const bg = useColorModeValue("gray.200", "gray.800");

  return (
    <Box w="100%" px="10px" pt="4px" pb="10px" bg={bg} rounded="lg" shadow="md">
      <Flex justify="space-between">
        <Text fontWeight="semibold">{name}</Text>
        <Text>{percentage}%</Text>
      </Flex>
      <Progress size="xs" value={percentage} color={color} />
    </Box>
  );
}
