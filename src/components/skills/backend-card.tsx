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
import nestjs from "public/nestjs.svg";
import { MdCheckCircle } from "react-icons/md";
import { SkillCard } from "./skill-card";

export function BackendCard() {
  const iconColor = useColorModeValue("blue.800", "blue.200");

  return (
    <SkillCard title="Backend" cover={nestjs}>
      <Box as="article">
        <Text mb="10px">Scalable, structured and secure backend service.</Text>
        <List pl="0">
          <ListItem>
            <ListIcon as={MdCheckCircle} color={iconColor} />
            Mainstream&nbsp;<Text as="strong">languages</Text>
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={iconColor} />
            <Text as="strong">Database</Text>&nbsp;knowledge
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={iconColor} />
            <Text as="strong">API</Text>&nbsp;design
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={iconColor} />
            <Text as="strong">Design patterns</Text>
          </ListItem>
        </List>
      </Box>
      <VStack>
        <Image src={nestjs} alt="Nest.js" />
        <UnorderedList>
          <ListItem>
            Familiar with mainstream&nbsp;
            <Text as="strong">progrmaming languages</Text>, like JS/TS, Go,
            Python...
          </ListItem>
          <ListItem>
            Manipulate&nbsp;<Text as="strong">database</Text>
            &nbsp;with SQL or ORM, both relational and NoSQL.
          </ListItem>
          <ListItem>
            Learned about&nbsp;
            <Text as="strong">API design</Text>&nbsp;topics. REST and GraphQL.
          </ListItem>
          <ListItem>
            Learning&nbsp;
            <Text as="strong">design patterns and architecture</Text>&nbsp;in
            practice.
          </ListItem>
        </UnorderedList>
      </VStack>
    </SkillCard>
  );
}
