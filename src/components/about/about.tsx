import { Container, Divider, Flex } from "@chakra-ui/react";
import { GithubStats as IGithubStats } from "src/interfaces/github-stats";
import { Title } from "../common/title";
import { Article } from "./article";
import { GithubStats } from "./github-stats";
import { Picture } from "./picture";

interface Props {
  stats: IGithubStats;
}

export function About({ stats }: Props) {
  return (
    <Container as="section" maxW="6xl" minH="100vh" h="100vh" p="40px">
      <Title id="about">About</Title>
      <Flex columnGap="80px" justify="center">
        <Picture />
        <Flex maxW="550px" direction="column" justify="space-between">
          <Article />
          <Divider my="20px" />
          <GithubStats stats={stats} />
        </Flex>
      </Flex>
    </Container>
  );
}
