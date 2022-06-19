import { SimpleGrid } from "@chakra-ui/react";
import { useStatsContext } from "src/contexts/stats.context";
import { Repo } from "./repo";

export function RepoPanel() {
  const { repos } = useStatsContext();

  return (
    <SimpleGrid
      minChildWidth="300px"
      spacing="10px"
      w="100%"
      h="fit-content"
      p="0 4px 8px"
    >
      {repos.map(repo => (
        <Repo key={repo.name} {...repo} />
      ))}
    </SimpleGrid>
  );
}
