import {
  FormLabel,
  Input,
  FormControl,
} from "@chakra-ui/react";

type InputFieldType = "text" | "email" | "date" | "number";

interface InputFieldProps {
  htmlFor: string;
  type: InputFieldType;
  id: string;
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  required: boolean;
}

export default function InputField({
  htmlFor,
  id,
  type,
  label,
  value,
  onChange,
  required,
}: InputFieldProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <FormControl isRequired={required}>
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      <Input id={id} type={type} value={value} onChange={handleInputChange} />
    </FormControl>
  );
}