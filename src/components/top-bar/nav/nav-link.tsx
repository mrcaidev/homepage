import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export function NavLink({ href, children }: Props) {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <NextLink href={href} passHref>
      <Link
        p="6px 16px"
        fontWeight="medium"
        rounded="md"
        _hover={{ textDecor: "none", bg }}
      >
        {children}
      </Link>
    </NextLink>
  );
}
