import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface TextInputProps {
  label: string;
  requerida: boolean;
  name: string;
  id: string;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
}

export default function TextInput({
  requerida,
  name,
  id,
  placeholder,
  value,
  label,
  onChange,
}: TextInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <FormControl isRequired={requerida}>
      <FormLabel>{label}</FormLabel>
      <Input
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={handleInputChange}
      />
    </FormControl>
  );
}
