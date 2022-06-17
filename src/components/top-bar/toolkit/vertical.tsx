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
  const bg = useColorModeValue("gray.100", "gray.900");
  const toolkitRef = useRef(null);
  useOutsideClick({ ref: toolkitRef, handler: onClose });

  return (
    <Box ref={toolkitRef}>
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
        aria-label="Toolkit"
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
