import { Heading, Box, Stack, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import FormSubmitButton from "../../buttons/FormSubmitButton";
import { UserDelete } from "@/app/utils/interfaces";



export default function DeleteUserForm() {
  const [formData, setFormData] = useState<UserDelete>({
    mail: "krincon5@udi.edu.co",
    id: "4",
  });

  // Funcion para enviar los datos

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("URL_DE_LA_API", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Datos enviados correctamente");
        // Realizar acciones adicionales si la respuesta es exitosa
      } else {
        console.error("Error al enviar los datos");
        // Realizar acciones adicionales si la respuesta no es exitosa
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      // Realizar acciones adicionales si hay un error de conexión
    }
  };

  // cambia los datos

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <Heading>Desea Eliminar al Usuario</Heading>
          <Heading>{formData.mail}</Heading>

          <Stack spacing={10} pt={2}>
            <FormSubmitButton
              btnText="Ingresar"
              color="white"
              bgColor="blue.500"
            ></FormSubmitButton>
          </Stack>
        </Stack>
      </Box>
    </form>
  );
}
