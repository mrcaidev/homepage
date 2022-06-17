import { HStack } from "@chakra-ui/react";
import { ButtonLink } from "src/components/common/button-link";
import sections from "src/data/sections.json";

export function NavHorizontal() {
  return (
    <HStack as="nav">
      {sections.map(({ name, href }) => (
        <ButtonLink key={href} href={href}>
          {name}
        </ButtonLink>
      ))}
    </HStack>
  );
}
