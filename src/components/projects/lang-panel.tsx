import { VStack } from "@chakra-ui/react";
import { useStatsContext } from "src/contexts/stats.context";
import { Lang } from "./lang";

export function LangPanel() {
  const { topLangs } = useStatsContext();

  return (
    <VStack minW="200px">
      {topLangs.map(lang => (
        <Lang key={lang.name} {...lang} />
      ))}
    </VStack>
  );
}
