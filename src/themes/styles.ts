import { ColorMode } from "@chakra-ui/react";

interface Props {
  colorMode: ColorMode;
}

export const styles = {
  global: ({ colorMode }: Props) => ({
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      color: colorMode === "light" ? "gray.700" : "gray.300",
      fontSize: "lg",
    },
    h1: {
      fontSize: "5xl",
      fontWeight: "bold",
      lineHeight: "taller",
    },
    h2: {
      fontSize: "4xl",
      fontWeight: "bold",
      lineHeight: "taller",
    },
    h3: {
      fontSize: "3xl",
      fontWeight: "semibold",
      lineHeight: "taller",
    },
    h4: {
      fontSize: "2xl",
      fontWeight: "semibold",
      lineHeight: "taller",
    },
    h5: {
      fontSize: "xl",
      fontWeight: "semibold",
      lineHeight: "taller",
    },
    h6: {
      fontSize: "lg",
      fontWeight: "semibold",
      lineHeight: "taller",
    },
    p: {
      lineHeight: "tall",
    },
    strong: {
      color: colorMode === "light" ? "gray.800" : "gray.200",
      fontWeight: "semibold",
    },
    blockquote: {
      color: "gray.500",
    },
    cite: {
      color: "gray.500",
    },
    hr: {
      my: 2,
    },
    ol: {
      pl: 5,
    },
    ul: {
      pl: 5,
    },
    code: {
      px: 2,
      bg: colorMode === "light" ? "gray.300" : "gray.700",
      borderRadius: "md",
    },
    svg: {
      fill: "currentColor",
    },
  }),
};
