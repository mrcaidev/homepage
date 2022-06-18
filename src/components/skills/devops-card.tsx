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
import docker from "public/docker.svg";
import { MdCheckCircle } from "react-icons/md";
import { SkillCard } from "./skill-card";

export function DevopsCard() {
  const iconColor = useColorModeValue("blue.800", "blue.200");

  return (
    <SkillCard title="DevOps" cover={docker}>
      <Box as="article">
        <Text mb="10px">Maintain and host web apps.</Text>
        <List pl="0">
          <ListItem>
            <ListIcon as={MdCheckCircle} color={iconColor} />
            <Text as="strong">Linux</Text>&nbsp;experience
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={iconColor} />
            <Text as="strong">HTTP</Text>&nbsp;understanding
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={iconColor} />
            <Text as="strong">Docker</Text>&nbsp;containerization
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={iconColor} />
            <Text as="strong">CI / CD</Text>&nbsp;tools
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={iconColor} />
            <Text as="strong">Cloud VPS</Text>&nbsp;operations
          </ListItem>
        </List>
      </Box>
      <VStack>
        <Image src={docker} alt="Docker" />
        <UnorderedList>
          <ListItem>
            Some&nbsp;
            <Text as="strong">Linux</Text>&nbsp;experience, along with shell and
            terminal. I use Arch BTW.
          </ListItem>
          <ListItem>
            Understand how&nbsp;<Text as="strong">HTTP</Text>
            &nbsp;and HTTPS work.
          </ListItem>
          <ListItem>
            Containerize apps with&nbsp;
            <Text as="strong">Docker</Text>&nbsp;(Docker Compose).
          </ListItem>
          <ListItem>
            Basic knowledge about&nbsp;
            <Text as="strong">CI / CD</Text>&nbsp;tools like GitHub Actions.
          </ListItem>
          <ListItem>
            Maintain&nbsp;
            <Text as="strong">Cloud VPS</Text>&nbsp;to host applications.
          </ListItem>
        </UnorderedList>
      </VStack>
    </SkillCard>
  );
}
