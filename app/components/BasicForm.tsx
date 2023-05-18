import { useState } from "react";
import PasswordInput from "./PasswordInput";
import InputField from "./InputField";
import { Button, Box } from "@chakra-ui/react";

interface FormData {
  username: string;
  password: string;
}

export default function BasicForm() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" justifyContent="space-around">
        <InputField
          htmlFor="username"
          required={true}
          type="text"
          id="username"
          label="Username"
          value={formData.username}
          onChange={(value) =>
            setFormData((prevFormData) => ({
              ...prevFormData,
              username: value,
            }))
          }
        />

        <PasswordInput
          htmlFor="password"
          label="Contraseña"
          name="password"
          id="password"
          value={formData.password}
          onChange={(value) =>
            setFormData((prevFormData) => ({
              ...prevFormData,
              password: value,
            }))
          }
        />
        <Button size="md" marginTop="1rem" type="submit">
          Guardar
        </Button>
      </Box>
    </form>
  );
}
