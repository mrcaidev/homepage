import { HStack } from "@chakra-ui/react";
import { ColorModeToggler } from "./tools/color-mode-toggler";
import { ViewOnGithub } from "./tools/view-on-github";

export function ToolkitHorizontal() {
  return (
    <HStack>
      <ViewOnGithub />
      <ColorModeToggler />
    </HStack>
  );
}
