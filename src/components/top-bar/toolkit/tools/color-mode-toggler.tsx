import {
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

export function ColorModeToggler() {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(
    <Icon as={FiMoon} boxSize="22px" />,
    <Icon as={FiSun} boxSize="22px" />
  );

  return (
    <IconButton
      variant="ghost"
      icon={icon}
      aria-label="Toggle color mode"
      onClick={toggleColorMode}
    />
  );
}
