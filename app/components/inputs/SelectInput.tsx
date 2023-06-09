import { useEffect, useState } from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

import { SelectFieldProps, Option } from "../../utils/interfaces";

export default function SelectInput({
  id,
  name,
  htmlFor,
  label,
  apiUrl,
  onChange,
}: SelectFieldProps) {
  const [options, setOptions] = useState<Option[]>([]);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(apiUrl);
        const data: Option[] = await response.json();
        setOptions(data);
      } catch (error) {
        console.error("Error al obtener las opciones:", error);
        setOptions([]);
      }
    };

    fetchOptions();
  }, [apiUrl]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    onChange(selectedValue);
  };

  return (
    <FormControl>
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      <Select name={name} id={id} value={value} onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.title}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}


