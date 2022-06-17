import {
  Box,
  Collapse,
  Icon,
  IconButton,
  useColorModeValue,
  useDisclosure,
  useOutsideClick,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { MdSettings } from "react-icons/md";
import { ColorModeToggler } from "./tools/color-mode-toggler";
import { ViewOnGithub } from "./tools/view-on-github";

export function ToolkitVertical() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const hint = isOpen ? "Collapse toolkit" : "Expand toolkit";
  const bg = useColorModeValue("white", "gray.800");
  const ref = useRef(null);
  useOutsideClick({ ref, handler: onClose });

  return (
    <Box ref={ref}>
      <IconButton
        variant="ghost"
        icon={
          <Icon
            as={MdSettings}
            boxSize="30px"
            transition="ease 0.2s"
            transform={isOpen ? "rotate(60deg)" : "rotate(0)"}
          />
        }
        aria-label={hint}
        onClick={onToggle}
      />
      <Collapse in={isOpen}>
        <VStack pos="absolute" mt="8px" rounded="md" bg={bg}>
          <ColorModeToggler />
          <ViewOnGithub />
        </VStack>
      </Collapse>
    </Box>
  );
}
