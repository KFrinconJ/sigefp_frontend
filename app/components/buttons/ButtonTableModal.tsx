import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ButtonGroup,
  IconButton
} from "@chakra-ui/react";
import { MdDelete, MdEdit } from "react-icons/md";

interface ButtonTableModal {
  headerText: string;
  idItem: number;
}

export default function ButtonTableModal({headerText, idItem
}: ButtonTableModal) {
  const { isOpen: isOpenEditModal, onOpen: onOpenEditModal, onClose: onCloseEditModal } = useDisclosure();
  const { isOpen: isOpenDeleteModal, onOpen: onOpenDeleteModal, onClose: onCloseDeleteModal } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);


  return (
    <>
      <ButtonGroup spacing={2}>
        <IconButton
          onClick={onOpenEditModal}
          icon={<MdEdit />}
          colorScheme="yellow"
          variant="outline"
          aria-label='Editar'
        />
        <IconButton
          onClick={onOpenDeleteModal}
          icon={<MdDelete />}
          colorScheme="red"
          variant="outline"
          aria-label='Eliminar'
        />
      </ButtonGroup>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpenEditModal}
        onClose={onCloseEditModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar {headerText} {idItem} </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* Aquí va el formulario para la acción de edición */}
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpenDeleteModal}
        onClose={onCloseDeleteModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Eliminar {headerText} {idItem} </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* Aquí va el formulario para la acción de eliminación */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
