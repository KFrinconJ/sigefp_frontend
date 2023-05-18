'use client'

import { Box, Container, Flex, Icon } from "@chakra-ui/react";
import { FcAbout } from "react-icons/fc";

import { Card } from "../components/Card";

export default function gridListWith() {
  return (
    <Box p={4}>
      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Heading"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}


