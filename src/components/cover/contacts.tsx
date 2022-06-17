import {
  Button,
  Flex,
  HStack,
  Icon,
  Link,
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
          <Link href="https://github.com/mrcaidev" isExternal>
            <Icon as={FaGithub} boxSize="32px" _hover={{ color: "gray.500" }} />
          </Link>
          <Link href="mailto:mrcaidev@qq.com" isExternal>
            <Icon as={MdEmail} boxSize="36px" _hover={{ color: "gray.500" }} />
          </Link>
        </HStack>
      </ScaleFade>
    </Flex>
  );
}
