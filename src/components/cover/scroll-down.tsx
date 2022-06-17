import { Box, Icon, IconButton } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useEffect, useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

const pointDown = keyframes(`
  0% {
    transform: 0;
  }
  50% {
    transform: translateY(15px);
  }
  100% {
    transform: 0;
  }
`);

export function ScrollDown() {
  const handleClick = () => window.scrollBy(0, window.innerHeight);

  const [display, setDisplay] = useState("block");
  const handleScroll = () =>
    setDisplay(window.scrollY === 0 ? "block" : "none");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      pos="fixed"
      bottom="20px"
      left="0"
      right="0"
      display={display}
      textAlign="center"
    >
      <IconButton
        variant="unstyled"
        icon={
          <Icon
            as={BsChevronDoubleDown}
            boxSize="28px"
            animation={`${pointDown} 1s infinite`}
          />
        }
        aria-label="Scroll down"
        onClick={handleClick}
      />
    </Box>
  );
}
