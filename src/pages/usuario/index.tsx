import Container from '@mui/material/Container';
import CrearUsuario from '../../components/molecules/Usuarios/CrearUsuario/CrearUsuario';
import ListarUsuario from '../../components/molecules/Usuarios/ListarUsuario/ListarUsuario';
import { useState } from 'react';

export default function Usuario() {

  const [load, setLoad] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }} >
      <CrearUsuario setLoad={setLoad} load={load} />
      <ListarUsuario load={load} />
    </Container>
  );
}