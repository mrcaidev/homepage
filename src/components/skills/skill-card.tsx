import {
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { MouseEvent, ReactNode } from "react";

interface Props {
  title: string;
  cover: any;
  children: ReactNode[];
}

export function SkillCard({ title, cover, children }: Props) {
  const bg = useColorModeValue("gray.200", "gray.800");
  const { isOpen: isBackside, onToggle: flipCard } = useDisclosure();
  const {
    isOpen: shouldShowModal,
    onOpen,
    onClose: hideModal,
  } = useDisclosure();
  const showModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onOpen();
  };

  return (
    <>
      <Box
        pos="relative"
        w="fit-content"
        h="fit-content"
        bg={bg}
        transition="ease 0.5s"
        transform={`rotateY(${isBackside ? "180deg" : "0"})`}
        rounded="3xl"
        shadow="md"
        cursor="pointer"
        sx={{ transformStyle: "preserve-3d" }}
        onClick={flipCard}
      >
        <Box p="50px" transform="translateZ(30px)">
          <VStack>
            <Image src={cover} alt={title} />
            <Heading as="h3">{title}</Heading>
          </VStack>
        </Box>
        <Flex
          direction="column"
          justify="space-evenly"
          pos="absolute"
          p="30px"
          top="0"
          bottom="0"
          left="0"
          right="0"
          overflow="hidden"
          transform="translateZ(-30px) rotateY(180deg)"
        >
          {children[0]}
          <Button
            variant="link"
            color="gray.500"
            alignSelf="end"
            onClick={showModal}
          >
            Learn more
          </Button>
        </Flex>
      </Box>
      <Modal isOpen={shouldShowModal} onClose={hideModal} isCentered size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children[1]}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={hideModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
