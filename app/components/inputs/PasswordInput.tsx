import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface PasswordInputProps {
  name: string;
  id: string;
  value: string;
  label: string;
  htmlFor: string;
  onChange: (value: string) => void;
}

export default function PasswordInput({
  name,
  id,
  value,
  label,
  htmlFor,
  onChange,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <FormControl isRequired>
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      <InputGroup>
        <Input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          id={id}
          onChange={handleInputChange}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}
