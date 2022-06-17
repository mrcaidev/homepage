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
    <Container as="section" maxW="6xl" minH="100vh" p="40px">
      <Title>About</Title>
      <Flex rowGap="40px" columnGap="80px" justify="center" wrap="wrap">
        <Picture />
        <Flex maxW="500px" direction="column" justify="space-between">
          <Article />
          <Divider my="20px" />
          <GithubStats stats={stats} />
        </Flex>
      </Flex>
    </Container>
  );
}
