import { Container, Divider, Flex } from "@chakra-ui/react";
import { Title } from "../common/title";
import { Article } from "./article";
import { GithubStats } from "./github-stats";
import { Picture } from "./picture";

export function About() {
  return (
    <Container as="section" maxW="6xl" minH="100vh" p="40px" id="about">
      <Title>About</Title>
      <Flex columnGap="80px" justify="center">
        <Picture />
        <Flex maxW="550px" direction="column" justify="space-between">
          <Article />
          <Divider my="20px" />
          <GithubStats />
        </Flex>
      </Flex>
    </Container>
  );
}
