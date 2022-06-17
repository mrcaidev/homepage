import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export function ButtonLink({ href, children }: Props) {
  const bg = useColorModeValue("gray.300", "gray.700");

  return (
    <NextLink href={href} passHref>
      <Link p="6px 12px" fontWeight="semibold" rounded="md" _hover={{ bg }}>
        {children}
      </Link>
    </NextLink>
  );
}
