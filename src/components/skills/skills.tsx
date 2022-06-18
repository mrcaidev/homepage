import { Container, Wrap, WrapItem } from "@chakra-ui/react";
import { Title } from "../common/title";
import { BackendCard } from "./backend-card";
import { DevopsCard } from "./devops-card";
import { FrontendCard } from "./frontend-card";

export function Skills() {
  return (
    <Container as="section" maxW="6xl" minH="100vh" p="40px">
      <Title id="skills">Skills</Title>
      <Wrap justify="center" spacing={12}>
        <WrapItem>
          <FrontendCard />
        </WrapItem>
        <WrapItem>
          <BackendCard />
        </WrapItem>
        <WrapItem>
          <DevopsCard />
        </WrapItem>
      </Wrap>
    </Container>
  );
}
