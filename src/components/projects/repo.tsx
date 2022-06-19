import {
  Circle,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { GoProject } from "react-icons/go";
import { Repo } from "src/models/stats.model";

const hrefPrefix = "https://github.com/mrcaidev/";

export function Repo({ description, forks, name, stars, lang }: Repo) {
  const descColor = useColorModeValue("gray.600", "gray.400");
  const tagColor = useColorModeValue("gray.700", "gray.300");
  const bg = useColorModeValue("gray.200", "gray.800");

  return (
    <LinkBox p="10px 20px" bg={bg} rounded="xl" shadow="md">
      <HStack>
        <Icon as={GoProject} />
        <LinkOverlay href={hrefPrefix + name} isExternal fontWeight="bold">
          {name}
        </LinkOverlay>
      </HStack>
      <Text noOfLines={1} my="4px" color={descColor} fontSize="sm">
        {description}
      </Text>
      <HStack spacing={4}>
        <Tag px="0" bg={bg}>
          <Circle size="12px" bg={lang.color ?? "#888"} />
          <TagLabel color={tagColor} pl="8px">
            {lang.name}
          </TagLabel>
        </Tag>
        <Tag px="0" bg={bg}>
          <TagLeftIcon as={BiStar} boxSize="14px" color={tagColor} />
          <TagLabel color={tagColor}>{stars}</TagLabel>
        </Tag>
        <Tag px="0" bg={bg}>
          <TagLeftIcon as={BiGitRepoForked} boxSize="14px" color={tagColor} />
          <TagLabel color={tagColor}>{forks}</TagLabel>
        </Tag>
      </HStack>
    </LinkBox>
  );
}
