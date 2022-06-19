import { Container, Wrap, WrapItem } from "@chakra-ui/react";
import { Title } from "../common/title";
import { LangPanel } from "./lang-panel";
import { RepoPanel } from "./repo-panel";

export function Projects() {
  return (
    <Container as="section" maxW="6xl" minH="100vh" p="40px" id="projects">
      <Title>Projects</Title>
      <Wrap justify="center" spacing="30px">
        <WrapItem flexGrow={1}>
          <LangPanel />
        </WrapItem>
        <WrapItem flexGrow={2}>
          <RepoPanel />
        </WrapItem>
      </Wrap>
    </Container>
  );
}
