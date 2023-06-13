import { Heading, Flex, Spacer } from "@chakra-ui/react";
import { ReactElement } from "react";

interface TitleAddContainerProps {
  title: string;
  Button: ReactElement;
}

export default function TitleAddContainer({
  title,
  Button,
}: TitleAddContainerProps) {
  return (
    <Flex justifyContent="space-evenly" alignItems="center" padding={10}>
      <Heading as="h1" size="4xl" noOfLines={1}>
        {title}
      </Heading>
      <Spacer />
      <>{Button}</>
    </Flex>
  );
}
