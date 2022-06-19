import {
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { useStatsContext } from "src/contexts/stats.context";

export function GithubStats() {
  const {
    githubStats: { count, stars, forks },
    success,
  } = useStatsContext();

  return (
    <StatGroup textAlign="center" py="10px">
      <Stat>
        <StatLabel>Built</StatLabel>
        <StatNumber>{success ? count : "N/A"}</StatNumber>
        <StatHelpText>projects</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Received</StatLabel>
        <StatNumber>{success ? stars : "N/A"}</StatNumber>
        <StatHelpText>stars</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Got</StatLabel>
        <StatNumber>{success ? forks : "N/A"}</StatNumber>
        <StatHelpText>forks</StatHelpText>
      </Stat>
    </StatGroup>
  );
}
