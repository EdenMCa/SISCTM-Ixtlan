import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NavLogin from './components/NavLogin';
import Nav from './components/Nav'; 
import { Login } from './pages/Login/Login';
import PaginaPrincipal from './pages/PantallaPrincipal/PaginaPrincipal';
import Cobrar from './pages/Cobrar/Cobrar';
import Catalog from './pages/Catalogo/catalogo';
import BaseCatastral from './pages/BaseCatastral/BaseCatastral';
import Alquiler from './pages/Alquiler/Alquiler';

const AppRoutes = () => {
  return (
    <Routes>

      <Route element={<Layout nav={NavLogin} backgroundClass="background-login" />}>
        <Route path="/" element={<Login />} />
      </Route>

      <Route element={<Layout nav={Nav} backgroundClass="background-home" />}>
        <Route path="/home" element={<PaginaPrincipal />} />
      </Route>

      <Route element={<Layout nav={Nav} />}>
        <Route path="/Cobrar" element={<Cobrar />} />
        <Route path="/Catalog" element={<Catalog/>}/>
        <Route path="/BaseCatastral" element={<BaseCatastral />} />
        <Route path="/Alquiler" element={<Alquiler />} />

      </Route>

    </Routes>
  );
};

export default AppRoutes;
