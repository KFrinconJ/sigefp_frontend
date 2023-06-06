
import {
    Box,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import InputField from "../inputs/InputField";
import PasswordInput from "../inputs/PasswordInput";
import FormSubmitButton from "../buttons/FormSubmitButton";
interface LoginFormData {
    mail: string;
    password: string;
}



export default function LoginForm() {
    const [formData, setFormData] = useState<LoginFormData>({
        mail: "",
        password: "",
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
                        label="Username"
                        value={formData.mail}
                        onChange={(value) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                mail: value,
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
                    <Stack spacing={10} pt={2}>
                        <FormSubmitButton btnText="Ingresar" color="white" bgColor="blue.500"></FormSubmitButton>
                    </Stack>
                </Stack>
            </Box>

        </form>

    )
}
