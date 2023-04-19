import Container from '@mui/material/Container';
import CrearUsuario from '../../components/molecules/Usuarios/CrearUsuario/CrearUsuario';
import ListarUsuario from '../../components/molecules/Usuarios/ListarUsuario/ListarUsuario';
import { useState } from 'react';
import EliminarUsuario from '../../components/molecules/Usuarios/EliminarUsuario/EliminarUsuario';
import ActualizarUsuario from '../../components/molecules/Usuarios/ActualizarUsuario/ActualizarUsuario';
import { RootState } from 'src/lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './../../lib/slice/counterSlice';
import { useNavigate } from 'react-router-dom';

export default function Usuario() {

  // const count = useSelector((state: RootState) => state.counter.value)
  // const dispatch = useDispatch()
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [dataEliminar, setDataEliminar] = useState('')
  const [dataModificar, setDataModificar] = useState('')
  const user: any = useSelector((state: RootState) => state.auth.user);
  const loading: any = useSelector((state: RootState) => state.auth.loading);

  // const [contador, setContador] = useState(0)

  if(loading){
    return <>Cargando</>;
  }

  if(!user){
    navigate('/login');
    return <></>
  }

  return (

    <>
      {/* <p>Sin reducer</p> 
      

      <button onClick={() => { setContador(contador+1) }}>
        Incrementar sin reducer
      </button>
      <span>{contador}</span>
      <button onClick={() => { setContador(contador-1) }}>
        Decrementar sin reducer
      </button>

      <hr />

      <p>Con reducer</p>
      
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div> */}

      <Container maxWidth="lg" sx={{ mt: 5 }} >
        <CrearUsuario setLoad={setLoad} load={load} />
        <ListarUsuario load={load} setDataEliminar={setDataEliminar} setDataModificar={setDataModificar} />
        <EliminarUsuario dataEliminar={dataEliminar}  load={load} setLoad={setLoad} />
        <ActualizarUsuario dataModificar={dataModificar} setLoad={setLoad} load={load} />
      </Container>

    </>

    
  );
}