import {
  Button,
  Flex,
  HStack,
  Icon,
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const fadeIn = keyframes(`
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: 0;
    opacity: 1;
  }
`);

export function Contacts() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex gap="20px">
      <Button
        colorScheme="blue"
        rightIcon={
          <Icon
            as={FaArrowRight}
            transition="ease 0.2s"
            transform={isOpen ? "rotateY(180deg)" : "rotateY(0)"}
          />
        }
        onClick={onToggle}
        animation={`${fadeIn} 1s`}
      >
        Get in touch
      </Button>
      <ScaleFade in={isOpen}>
        <HStack spacing={4}>
          <a
            href="https://github.com/mrcaidev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={FaGithub} boxSize="32px" />
          </a>
          <a
            href="mailto:mrcaidev@qq.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={MdEmail} boxSize="36px" />
          </a>
        </HStack>
      </ScaleFade>
    </Flex>
  );
}
