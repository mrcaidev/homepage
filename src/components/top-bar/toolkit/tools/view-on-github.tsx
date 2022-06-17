import { Icon, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaGithub } from "react-icons/fa";

export function ViewOnGithub() {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <NextLink href="https://github.com/mrcaidev/home" passHref>
      <Link isExternal p="8px 8px 0" rounded="md" _hover={{ bg }}>
        <Icon as={FaGithub} boxSize="24px" />
      </Link>
    </NextLink>
  );
}
