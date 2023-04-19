import ResponsiveAppBar from "./components/molecules/ResponsiveAppBar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Usuario from './pages/usuario';
import Testimonio from "./pages/testimonio";
import Login from "./pages/auth/login";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "./lib/store";
import {useEffect} from 'react';
import { fetchValidateToken } from "./lib/slice/authSlice";
import Cookies from "js-cookie";
function App() {

  const user: any = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
  
    const fetchData = async () => {

      // const token = Cookies.get('token');
      // if(token){
      const response = await dispatch( fetchValidateToken() );
      // }
    };

    fetchData();
  }, [])
  
  return (
    <Router>
      <div className="App">
        {user && 
          <ResponsiveAppBar />
        }
        <Routes>
          <Route path='/' element={<Usuario/>} />  
          <Route path='/login' element={<Login/>} />
          <Route path='/usuarios' element={<Usuario/>} />
          <Route path='/testimonio' element={<Testimonio/>} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App
