import { Box, Center, Container, Flex } from "@chakra-ui/react";
import { Contacts } from "./contacts";
import { Picture } from "./picture";
import { ScrollDown } from "./scroll-down";
import { Subtitle } from "./subtitle";
import { Title } from "./title";

export function Cover() {
  return (
    <Container as="section" maxW="8xl" h="100vh" p="40px">
      <Center h="100%">
        <Flex
          justify="center"
          align="center"
          rowGap="40px"
          columnGap="100px"
          wrap="wrap-reverse"
        >
          <Box>
            <Title />
            <Subtitle />
            <Contacts />
          </Box>
          <Picture />
        </Flex>
      </Center>
      <ScrollDown />
    </Container>
  );
}
