import { useState } from "react";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

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
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <FormControl isRequired>
        <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          name={name}
          id={id}
          value={value}
          onChange={handleInputChange}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}
