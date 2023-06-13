import { useDisclosure } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Button,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { MdAddCircle } from "react-icons/md";

interface ButtonModalFormProps {
  btntext: string;
  headertext: string;
  formulario: ReactElement;
}

export default function ButtonModalForm({
  btntext,
  headertext,
  formulario,

}: ButtonModalFormProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<MdAddCircle />}
        colorScheme="teal"
        variant="solid"
      >
        {btntext}
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{headertext} </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {formulario}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
