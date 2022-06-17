import { Box, Flex, Hide, Show, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { NavHorizontal, NavVertical } from "./nav";
import { ToolkitHorizontal, ToolkitVertical } from "./toolkit";

export function TopBar() {
  // Compress top bar if not on page top.
  const [py, setPy] = useState("16px");
  const togglePy = () => setPy(window.scrollY < 100 ? "16px" : "8px");
  useEffect(() => {
    window.addEventListener("scroll", togglePy);
    return () => window.removeEventListener("scroll", togglePy);
  }, []);

  return (
    <Flex
      as="header"
      align="center"
      pos="fixed"
      top="0"
      left="0"
      right="0"
      px="32px"
      py={py}
      gap="20px"
      zIndex="9999"
      transition="ease 0.2s"
      backdropFilter="blur(5px)"
    >
      <Hide above="md">
        <NavVertical />
      </Hide>
      <Box flexGrow={{ base: 1, md: 0 }}>
        <Logo />
      </Box>
      <Show above="md">
        <NavHorizontal />
      </Show>
      <Show above="md">
        <Spacer />
      </Show>
      <Show above="md">
        <ToolkitHorizontal />
      </Show>
      <Hide above="md">
        <ToolkitVertical />
      </Hide>
    </Flex>
  );
}
