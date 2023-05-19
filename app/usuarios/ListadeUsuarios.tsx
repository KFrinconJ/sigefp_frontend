import { User } from "../utils/interfaces";
import TableButton from "../components/ButtonTable";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { MdEdit, MdDelete } from "react-icons/md";

interface UserTableProps {
  users: User[];
}

const ListaDeUsuarios: React.FC<UserTableProps> = ({ users }) => {
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Address</Th>
            <Th>Phone</Th>
            <Th>Website</Th>
            <Th>Company</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.username}</Td>
              <Td>{user.email}</Td>
              <Td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</Td>
              <Td>{user.phone}</Td>
              <Td>{user.website}</Td>
              <Td>{user.company.name}</Td>
              <Td>
                <Stack>
                  <Link href={`/usuarios/${user.id}`}>
                    <TableButton
                      icon={<MdEdit />}
                      text="Editar"
                      color="orange"
                    />
                  </Link>
                  <Link href={`/usuarios/${user.id}`}>
                    <TableButton
                      icon={<MdDelete />}
                      text="Eliminar"
                      color="red"
                    />
                  </Link>
                </Stack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ListaDeUsuarios;
