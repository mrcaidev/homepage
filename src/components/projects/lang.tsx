import { Box, Flex, Progress, Text, useColorModeValue } from "@chakra-ui/react";
import { TopLang } from "src/models/stats.model";

export function Lang({ name, percentage }: TopLang) {
  const bg = useColorModeValue("gray.200", "gray.800");

  return (
    <Box w="100%" p="4px 16px 10px" bg={bg} rounded="lg" shadow="md">
      <Flex justify="space-between" align="center" columnGap="8px">
        <Text fontWeight="semibold">{name}</Text>
        <Text fontSize="sm">{percentage}%</Text>
      </Flex>
      <Progress size="xs" value={percentage} />
    </Box>
  );
}
