import { Box } from "@chakra-ui/react";
import { Repo } from "src/components/projects/repo";

export default function TestPage() {
  return (
    <Box mt="200px" w="500px">
      <Repo
        name="uestc-temperature"
        forks={192}
        stars={102}
        description="Design patterns implemented in TypeScript, and my personal understanding."
        lang={{ name: "TypeScript", color: "#9ac8e2" }}
      />
    </Box>
  );
}
