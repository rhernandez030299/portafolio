import ResponsiveAppBar from "@components/molecules/ResponsiveAppBar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Usuario from "@pages/usuario";

function App() {

  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path='/' exact element={<Usuario/>} />  
          <Route path='/usuario' exact element={<Usuario/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
