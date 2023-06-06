import {
    Button,
} from "@chakra-ui/react";
interface FormSubmitBtn {
    btnText: string;
    color: string;
    bgColor: string;
}
export default function FormSubmitButton({ btnText, color, bgColor }: FormSubmitBtn) {
    return (
        <Button
            type="submit"
            loadingText="Submitting"
            size="lg"
            bg={"blue.400"}
            color={color}
            _hover={{
                bg: bgColor,
            }}
        >
            {btnText}
        </Button>
    )
}
