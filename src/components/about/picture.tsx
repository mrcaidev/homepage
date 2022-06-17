import { Show, Square } from "@chakra-ui/react";
import Image from "next/image";
import about from "public/about.jpg";

export function Picture() {
  return (
    <Show above="xl">
      <Square size="400px" rounded="3xl" overflow="hidden">
        <Image src={about} alt="Developer" placeholder="blur" priority />
      </Square>
    </Show>
  );
}
