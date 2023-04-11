import Container from '@mui/material/Container';
import CrearUsuario from '../../components/molecules/Usuarios/CrearUsuario/CrearUsuario';
import ListarUsuario from '../../components/molecules/Usuarios/ListarUsuario/ListarUsuario';
import { useState } from 'react';
import EliminarUsuario from '../../components/molecules/Usuarios/EliminarUsuario/EliminarUsuario';
import ActualizarUsuario from '../../components/molecules/Usuarios/ActualizarUsuario/ActualizarUsuario';

export default function Usuario() {

  const [load, setLoad] = useState(false);
  const [dataEliminar, setDataEliminar] = useState('')
  const [dataModificar, setDataModificar] = useState('')
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }} >
      <CrearUsuario setLoad={setLoad} load={load} />
      <ListarUsuario load={load} setDataEliminar={setDataEliminar} setDataModificar={setDataModificar} />
      <EliminarUsuario dataEliminar={dataEliminar}  load={load} setLoad={setLoad} />
      <ActualizarUsuario dataModificar={dataModificar} setLoad={setLoad} load={load} />
    </Container>
  );
}