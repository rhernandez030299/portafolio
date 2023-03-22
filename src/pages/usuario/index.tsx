import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import {useState, useEffect} from 'react';
import axios from 'axios';
import IUsuarios from 'src/interfaces/IUsuarios';

export default function Usuario() {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8080/api/usuarios');
      setRows(response.data.users);
    };
    fetchData();
  }, [])

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }} >

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Foto</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: IUsuarios) => (
              <TableRow
                key={row.idusuario}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nombre}
                </TableCell>
                <TableCell>
                  {row.email}
                </TableCell>
                <TableCell>{row.foto}</TableCell>
                <TableCell>{row.rol.nombre}</TableCell>
                <TableCell>
                  acciones
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Container>
  );
}