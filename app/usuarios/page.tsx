"use client";

import React, { useEffect, useState } from "react";
import { User } from "../utils/interfaces";
import ListaDeUsuarios from "./ListadeUsuarios";
import BaseContainer from "../components/BaseContainer";
import ModalFormContainer from "../components/ModalFormContainer";

export default function Usuarios() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data: User[] = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <BaseContainer
      modalform={<ModalFormContainer btntext="Añadir Usuario" />}
      heading="Usuarios"
      content={<ListaDeUsuarios users={users}></ListaDeUsuarios>}
    ></BaseContainer>
  );
}
