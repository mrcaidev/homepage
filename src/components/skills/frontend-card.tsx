import {
  Box,
  List,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import reactjs from "public/reactjs.svg";
import { MdCheckCircle } from "react-icons/md";
import { SkillCard } from "./skill-card";

export function FrontendCard() {
  const iconColor = useColorModeValue("blue.800", "blue.200");

  return (
    <SkillCard title="Frontend" cover={reactjs}>
      <Box as="article">
        <Text mb="10px">
          Build web apps with beautiful UI and high performance.
        </Text>
        <List pl="0">
          <ListItem>
            <ListIcon as={MdCheckCircle} color={iconColor} />
            <Text as="strong">HTML</Text>&nbsp;best practices
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={iconColor} />
            <Text as="strong">CSS</Text>&nbsp;modern solutions
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={iconColor} />
            <Text as="strong">ES6+ / TypeScript</Text>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={iconColor} />
            <Text as="strong">Engineered</Text>&nbsp;project
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={iconColor} />
            <Text as="strong">React</Text>&nbsp;with its ecosystem
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={iconColor} />
            <Text as="strong">Next.js</Text>&nbsp;for SSR and SSG
          </ListItem>
        </List>
      </Box>
      <VStack>
        <Image src={reactjs} alt="React.js" />
        <UnorderedList>
          <ListItem>
            Write&nbsp;<Text as="strong">HTML</Text>&nbsp;with semantics,
            accessibility and best practices.
          </ListItem>
          <ListItem>
            Know modern&nbsp;<Text as="strong">CSS</Text>
            &nbsp;solutions, e.g. Sass, CSS modules, Styled Components...
          </ListItem>
          <ListItem>
            Experienced in&nbsp;
            <Text as="strong">ES6+ / TypeScript</Text>. Clean code.
          </ListItem>
          <ListItem>
            Build fully&nbsp;<Text as="strong">engineered</Text>
            &nbsp;projects with Prettier, ESLint, Commitlint...
          </ListItem>
          <ListItem>
            Familiar with&nbsp;<Text as="strong">React</Text> and its advanced
            topics. Learn new libraries fast.
          </ListItem>
          <ListItem>
            Mostly use&nbsp;<Text as="strong">Next.js</Text>. My favourite
            framework.
          </ListItem>
        </UnorderedList>
      </VStack>
    </SkillCard>
  );
}
