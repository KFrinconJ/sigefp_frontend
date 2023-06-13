"use client";

import ButtonModalForm from "@/app/components/buttons/ButtonModalForm";
import CreateUserForm from "@/app/components/forms/usuarios/CreateUserForm";
import TitleAddContainer from "@/app/components/TitleAddContainer";
import TablaUsuarios from "@/app/components/tables/TablaUsuario";
import { Box } from "@chakra-ui/react";

export default function Usuarios() {
  return (
    <>
      <TitleAddContainer
        title="Usuarios"
        Button={
          <ButtonModalForm
            btntext="Añadir Usuario"
            headertext="Añadir Usuario"
            formulario={<CreateUserForm />}
          />
        }
      ></TitleAddContainer>
      <Box paddingLeft={10} paddingRight={10}>
        <TablaUsuarios />
      </Box>
    </>
  );
}
