import { useDisclosure } from "@chakra-ui/react";
import React from "react";
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
import LoginForm from "./forms/LoginForm";
import CreateUserForm from "./forms/usuarios/CreateUserForm";

interface ModalFormContainerProps {
  btntext: string;
  headertext: string;
}

export default function ModalFormContainer({
  btntext,
  headertext,
}: ModalFormContainerProps) {
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
            <CreateUserForm />          
            </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
