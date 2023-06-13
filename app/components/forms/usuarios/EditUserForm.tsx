import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import InputField from "../../inputs/InputField";
import FormSubmitButton from "../../buttons/FormSubmitButton";
import SelectInput from "../../inputs/SelectInput";
import { User } from "@/app/utils/interfaces";

export default function EditUserForm() {
  const [formData, setFormData] = useState<User>({
    nombre: "kevin",
    apellido: "rincon",
    cargo: "vicerector",
    password: "1234",
    mail: "krincon5@udi.edu.co",
    rol_id: "4",
    contrato_id: null,
    vinculacion: null,
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
          <InputField
            htmlFor="mail"
            required={true}
            type="email"
            id="mail"
            label="Correo"
            value={formData.mail}
            onChange={(value) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                mail: value,
              }))
            }
          />

          <InputField
            htmlFor="password"
            required={true}
            type="text"
            id="password"
            label="Contraseña"
            value={formData.password}
            onChange={(value) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                password: value,
              }))
            }
          />

          <InputField
            htmlFor="nombre"
            required={false}
            type="text"
            id="nombre"
            label="Nombre"
            value={formData.nombre}
            onChange={(value) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                nombre: value,
              }))
            }
          />
          <InputField
            htmlFor="apellido"
            required={false}
            type="text"
            id="apellido"
            label="Apellido"
            value={formData.apellido}
            onChange={(value) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                apellido: value,
              }))
            }
          />
          <InputField
            htmlFor="cargo"
            required={false}
            type="text"
            id="cargo"
            label="Cargo"
            value={formData.cargo}
            onChange={(value) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                cargo: value,
              }))
            }
          />

          <SelectInput
            name="rol"
            id="rol"
            htmlFor="rol"
            label="Rol"
            apiUrl="https://jsonplaceholder.typicode.com/todos"
            value={formData.rol_id.toString()}
            onChange={(value) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                rol_id: value,
              }))
            }
          />

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
