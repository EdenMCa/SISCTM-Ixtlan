import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import PaginaPrincipal from './pages/PantallaPrincipal/PaginaPrincipal';  
import Cobrar from './pages/Cobrar/Cobrar';
import './App.css';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<PaginaPrincipal />} />
      <Route path='/Cobrar' element={<Cobrar/>}/>
    </Routes>
  );
};

export default AppRoutes;