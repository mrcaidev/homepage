import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "public/logo.svg";
import sections from "src/data/sections.json";

export function Footer() {
  const year = new Date().getFullYear();
  const bg = useColorModeValue("white", "black");

  return (
    <Box as="footer">
      <svg
        viewBox="0 -20 700 110"
        width="100%"
        height="110px"
        preserveAspectRatio="none"
      >
        <path
          transform="translate(0, 35)"
          d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700"
          fill={bg}
        />
      </svg>
      <Box bg={bg}>
        <Container maxW="6xl" p="40px">
          <Flex justify="space-between" gap="50px" wrap="wrap-reverse">
            <VStack flexGrow={1}>
              <Image src={logo} alt="" width="44px" height="60px" />
              <Text as="h2" fontSize="xl">
                mrcai.space
              </Text>
              <Text
                fontSize="xs"
                color="gray.500"
                lineHeight="short"
                textAlign="center"
              >
                Copyright © 2020-{year} Yuwang Cai. All Rights Reserved.
              </Text>
            </VStack>
            <HStack
              flexGrow={1}
              justify="space-evenly"
              align="start"
              columnGap="30px"
            >
              <VStack>
                <Text as="h3" fontSize="xl" color="gray.500">
                  SECTION
                </Text>
                {sections.map(({ name, href }) => (
                  <Link key={name} href={href}>
                    {name}
                  </Link>
                ))}
              </VStack>
              <VStack>
                <Text as="h3" fontSize="xl" color="gray.500">
                  CONTACT
                </Text>
                <Link href="https://github.com/mrcaidev" isExternal>
                  GitHub
                </Link>
                <Link href="mailto:mrcaidev@qq.com" isExternal>
                  Mail
                </Link>
              </VStack>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
