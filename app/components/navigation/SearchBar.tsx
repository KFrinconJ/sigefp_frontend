import React, { useEffect, useState } from "react";
import ReactSearchBox from "react-search-box";
import { IconButton } from "@chakra-ui/react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface Option {
  key: string;
  value: string;
}

export default function SearchBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [apiData, setApiData] = useState<Option[]>([]);

  const handleSelect = (record: any) => {
    console.log(record);
  };

  const handleFocus = () => {
    console.log("This function is called when it is focused");
  };

  const handleChange = (value: string) => {
    console.log(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        const transformedData = transformApiData(data); // Transformar los datos de la API al formato esperado
        setApiData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  
  

  const searchOptions: Option[] = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];

  const mergedOptions: Option[] = [...searchOptions, ...apiData];

  const transformApiData = (data: any[]): Option[] => {
    return data.map((item) => ({
      key: item.id.toString(),
      value: item.name,
    }));
  };

  const fetchData = async (attribute: string) => {
    try {
      // Realizar la petición utilizando el atributo deseado
      const response =
        await fetch(`https://jsonplaceholder.typicode.com/users?name=${attribute}`);
      const data = await response.json();
      console.log("Data from API:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <IconButton
        onClick={onOpen}
        colorScheme="blue"
        aria-label="Search database"
        icon={<SearchIcon />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <ReactSearchBox
              placeholder="Search for John, Jane, or Mary"
              data={mergedOptions}
              onSelect={handleSelect}
              onFocus={handleFocus}
              onChange={handleChange}
              autoFocus
              leftIcon={<span>🎨</span>}
              iconBoxSize="48px"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
