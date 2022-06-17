import { Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export function Logo() {
  return (
    <Heading as="h1" fontWeight="1000" textAlign="center">
      <NextLink href="/">MRCAI</NextLink>
    </Heading>
  );
}
