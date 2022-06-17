import { HStack } from "@chakra-ui/react";
import sections from "src/data/sections.json";
import { toKebabCase } from "src/utils/to-kebab-case";
import { NavLink } from "./nav-link";

export function NavHorizontal() {
  return (
    <HStack as="nav">
      {sections.map(name => (
        <NavLink key={name} href={`#${toKebabCase(name)}`}>
          {name}
        </NavLink>
      ))}
    </HStack>
  );
}
