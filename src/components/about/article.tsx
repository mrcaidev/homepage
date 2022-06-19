import { Box, Icon, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { HiExternalLink } from "react-icons/hi";

export function Article() {
  const color = useColorModeValue("blue.700", "blue.300");

  return (
    <Box as="article">
      <Text as="h3">I&apos;m Yuwang Cai</Text>
      <Text fontSize="xl" fontWeight="semibold" mb="10px">
        —— A&nbsp;
        <Text as="strong" color={color}>
          college student
        </Text>
        &nbsp;in China
      </Text>
      <Text>
        I&apos;m a double major of&nbsp;
        <Text as="strong">Computer Science and Mathematics</Text>
        &nbsp;at&nbsp;
        <Text as="strong">
          <Link href="https://www.uestc.edu.cn/" isExternal>
            UESTC
            <Icon as={HiExternalLink} boxSize="16px" />
          </Link>
        </Text>
        . I grew fond of coding in 2021, and has been teaching myself&nbsp;
        <Text as="strong">frontend and backend</Text>
        &nbsp;technologies since. Now I&apos;m on the way to a&nbsp;
        <Text as="strong">full-stack</Text>
        &nbsp;developer.
      </Text>
    </Box>
  );
}
