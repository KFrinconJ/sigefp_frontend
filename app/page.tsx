"use client";

import {
  Flex,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import LoginForm from "./components/forms/LoginForm";

export default function LoginPage() {

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            SIGEFP
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Log In
          </Text>
        </Stack>
        <LoginForm></LoginForm>

      </Stack>
    </Flex>
  );
}
