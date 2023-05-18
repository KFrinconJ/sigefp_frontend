"use client";

import { Button } from "@chakra-ui/react";
import { MdAddCircle } from "react-icons/md";
import { useDisclosure } from "@chakra-ui/react";

interface AddButtonProps {
  btntext: string;
}

export default function AddButton({ btntext }: AddButtonProps) {
  const { onOpen } = useDisclosure();
  return (
    <Button
      onClick={onOpen}
      leftIcon={<MdAddCircle />}
      colorScheme="teal"
      variant="solid"
    >
      {btntext}
    </Button>
  );
}
