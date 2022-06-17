import {
  Box,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiMenu } from "react-icons/fi";
import sections from "src/data/sections.json";

export function NavVertical() {
  return (
    <Box>
      <Menu autoSelect={false} isLazy>
        <MenuButton
          as={IconButton}
          variant="ghost"
          icon={<Icon as={FiMenu} boxSize="24px" />}
          aria-label="Navigation menu"
        />
        <Box as="nav">
          <MenuList as="ul" pl="0">
            {sections.map(({ name, href }) => (
              <MenuItem as="li" key={href}>
                <NextLink href={href} passHref>
                  <Link w="100%" _hover={{ textDecor: "none" }}>
                    {name}
                  </Link>
                </NextLink>
              </MenuItem>
            ))}
          </MenuList>
        </Box>
      </Menu>
    </Box>
  );
}
