import { Box, Heading } from "@chakra-ui/react";
import { ReactElement } from "react";

interface BaseContainerProps {
  heading: string;
  content: ReactElement;
  modalform: ReactElement;
}

export default function BaseContainer({
  heading,
  content,
  modalform,
}: BaseContainerProps) {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Box display="flex" justifyContent="flex-end">
        {modalform}
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        {heading}
      </Heading>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {content}
      </Box>
    </Box>
  );
}
