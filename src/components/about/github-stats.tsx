import {
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { GithubStats } from "src/interfaces/github-stats";

interface Props {
  stats: GithubStats;
}

export function GithubStats({ stats }: Props) {
  const { count, stars, forks } = stats;

  return (
    <StatGroup textAlign="center" py="10px">
      <Stat>
        <StatLabel>Built</StatLabel>
        <StatNumber>{count ?? "N/A"}</StatNumber>
        <StatHelpText>projects</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Received</StatLabel>
        <StatNumber>{stars ?? "N/A"}</StatNumber>
        <StatHelpText>stars</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Got</StatLabel>
        <StatNumber>{forks ?? "N/A"}</StatNumber>
        <StatHelpText>forks</StatHelpText>
      </Stat>
    </StatGroup>
  );
}
