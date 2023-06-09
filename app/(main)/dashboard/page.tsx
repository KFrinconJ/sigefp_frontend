'use client'

import { Box, Container, Flex, Icon } from "@chakra-ui/react";
import { FcAbout } from "react-icons/fc";

import { Card } from "../../components/Card";


const cardsList = ['usuarios', 'funciones_sustantivas', 'adscripcion', 'periodos_academicos', 'contratos', 'oficinas', 'archivos', 'registro_semanal']

export default function gridListWith() {
  return (
    <Box p={4}>
      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Usuarios"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            linkpage="/usuarios"
            cantidad={200}
          />
        </Flex>
      </Container>
    </Box>
  );
}
