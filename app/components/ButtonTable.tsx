"use client";
import { Button } from "@chakra-ui/react";
import { ReactElement } from "react";

interface TableButtonProps {
  color: string;
  icon: ReactElement;
  text: string;
}

export default function TableButton({ color, icon, text }: TableButtonProps) {
  return (
    <Button leftIcon={icon} colorScheme={color} variant="solid">
      {text}
    </Button>
  );
}
