"use client";

import {
  Box,
  Stack,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react";
import { ReactElement } from "react";
import NextLink from 'next/link'

interface CardProps {
  heading: string;
  icon: ReactElement;
  linkpage: string;
  cantidad: number;
}

export function Card({ heading, icon, linkpage, cantidad }: CardProps) {
  return (
    <LinkBox as="article"
      borderWidth="1px"
      borderColor="black"
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderRadius="lg"
      overflow="hidden"
      p={5}>

      <Stack align={"center"} justify={"center"} spacing={2} >
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"gray.200"}

        >
          {icon}
        </Flex>
        <Box mt={2}>
          <LinkOverlay as={NextLink} href={linkpage}>
            <Heading size="md">{heading}</Heading>
            <Heading size="md" textAlign="center">{cantidad}</Heading>
          </LinkOverlay>
        </Box>
      </Stack>
    </LinkBox>
  );
}
