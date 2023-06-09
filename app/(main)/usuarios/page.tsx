"use client";

import React, { useEffect, useState } from "react";
import { User } from "../../utils/interfaces";
import BaseContainer from "../../components/BaseContainer";
import ModalFormContainer from "../../components/ModalFormContainer";
import BasicTable from "@/app/components/tables/BasicTable";
import memoize from "memoize-one";
import { TableColumn } from "react-data-table-component";
import ButtonTableModal from "@/app/components/buttons/ButtonTableModal";

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

  interface RowData {
    id: number;
    name: string;
    type: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
    sodium: number;
    calcium: number;
    iron: number;
  }



  const data: RowData[] = [
    {
      id: 1,
      name: "Dessert 1",
      type: "Type 1",
      calories: 100,
      fat: 5,
      carbs: 20,
      protein: 2,
      sodium: 50,
      calcium: 10,
      iron: 1,
    },
    {
      id: 2,
      name: "Dessert 2",
      type: "Type 2",
      calories: 150,
      fat: 8,
      carbs: 25,
      protein: 3,
      sodium: 70,
      calcium: 15,
      iron: 2,
    },
    // Agrega más objetos de datos según sea necesario
  ];

  const columns: TableColumn<RowData>[] = [
    {
      name: 'Name',
      selector: (row: RowData) => row.name,
      sortable: true,
      grow: 2,
    },
    {
      name: 'Type',
      selector: (row: RowData) => row.type,
      sortable: true,
    },
    {
      name: 'Calories (g)',
      selector: (row: RowData) => row.calories,
      sortable: true,
      right: true,
    },
    {
      name: 'Fat (g)',
      selector: (row: RowData) => row.fat,
      sortable: true,
      right: true,
    },
    {
      name: 'Carbs (g)',
      selector: (row: RowData) => row.carbs,
      sortable: true,
      right: true,
    },
    {
      name: 'Protein (g)',
      selector: (row: RowData) => row.protein,
      sortable: true,
      right: true,
    },
    {
      name: 'Sodium (mg)',
      selector: (row: RowData) => row.sodium,
      sortable: true,
      right: true,
    },
    {
      name: 'Calcium (%)',
      selector: (row: RowData) => row.calcium,
      sortable: true,
      right: true,
    },
    {
      name: 'Iron (%)',
      selector: (row: RowData) => row.iron,
      sortable: true,
      right: true,
    },
    {
      cell: (row: RowData) => <ButtonTableModal headerText='Usuario' idItem={row.id} />,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
  ];

  return (

    <BasicTable data={data} columns={columns} title="Desserts" pagination={true} progressPending={false} />
  );
}
