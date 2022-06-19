import { Skeleton, VStack } from "@chakra-ui/react";
import { useStatsContext } from "src/contexts/stats.context";
import { Lang } from "./lang";

export function LangPanel() {
  const { topLangs, success } = useStatsContext();

  return (
    <Skeleton w="100%" h="100%" rounded="lg" isLoaded={success}>
      <VStack w="100%" p="0 4px 8px">
        {topLangs.slice(0, 8).map((lang, index) => (
          <Lang key={lang.name ?? index} {...lang} />
        ))}
      </VStack>
    </Skeleton>
  );
}
