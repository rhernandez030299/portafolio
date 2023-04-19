
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState, useEffect} from 'react';
import axios from 'axios';
import IUsuarios from 'src/interfaces/IUsuarios';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Cookies from 'js-cookie';

interface ListarUsuarioProp {
  load: boolean,
  setDataEliminar: any,
  setDataModificar: any,
}

const ListarUsuario: React.FC<ListarUsuarioProp> = ({
  load = false,
  setDataEliminar,
  setDataModificar,
}) => {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_URL_SERVER}/api/usuarios`, {
        headers: {
          'x-token': Cookies.get('token')
        }
      });
      setRows(response.data.users);
    };
    fetchData();
  }, [load]);

  const handleEliminar = async(idusuario: number) => {
    setDataEliminar(idusuario);
  }

  const handleActualizar = (idusuario: number) => {
    setDataModificar(idusuario)
  }

  return (
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
              <TableCell>
                {row.foto && 
                  <img width={100} src={`${import.meta.env.VITE_URL_SERVER}/uploads/${row.foto}`} />
                }
              </TableCell>
              <TableCell>{row.rol.nombre}</TableCell>
              <TableCell>
                <IconButton color="primary" aria-label="Editar" component="label" onClick={ () => {handleActualizar(row.idusuario)}} >
                  <EditIcon />
                </IconButton>
                <IconButton color="primary" aria-label="Eliminar" component="label" onClick={ () => {handleEliminar(row.idusuario)}}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

}

export default ListarUsuario;