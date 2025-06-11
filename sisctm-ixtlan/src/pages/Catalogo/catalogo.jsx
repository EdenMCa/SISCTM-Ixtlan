// src/pages/Catalogo/catalogo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/CatalogStyle.css';

const Catalog = () => {
  return (
    <>


      <main>
        <div className="container">
          {/* Cada Link apunta a la ruta que definiste en AppRoutes */}
          <Link to="/Cobrar" className="card corte-caja">
            <h2>Corte de Caja</h2>
          </Link>

          <Link to="/GestionRecibos" className="card gestion-recibos">
            <h2>Gestión de Recibos</h2>
          </Link>

          <Link to="/CuentasContables" className="card cuentas-contables">
            <h2>Cuentas Contables</h2>
          </Link>

          <Link to="/Alquiler" className="card gestion-alquiler">
            <h2>Gestión del Alquiler</h2>
          </Link>

          <Link to="/GestionConexion" className="card gestion-conexion">
            <h2>Gestión de Conexión</h2>
          </Link>

          <Link to="/GestionEstablecimiento" className="card gestion-establecimiento">
            <h2>Gestión de Establecimiento</h2>
          </Link>

          <Link to="/BaseCatastral" className="card gestion-base">
            <h2>Gestión de Base Catastral</h2>
          </Link>

          <Link to="/EstimuloFiscal" className="card estimulo-fiscal">
            <h2>Gestión de Estímulo Fiscal</h2>
          </Link>

          <Link to="/GestionEjercicioFiscal" className="card ejercicio-fiscal">
            <h2>Gestión del Ejercicio Fiscal</h2>
          </Link>

          <Link to="/GestionSeccion" className="card gestion-seccion">
            <h2>Gestión de Sección</h2>
          </Link>

          <Link to="/GestionConceptos" className="card gestion-concepto">
            <h2>Gestión de Concepto</h2>
          </Link>

          <Link to="/GestionUsuarios" className="card gestion-usuarios">
            <h2>Gestión de Usuarios</h2>
          </Link>

          <Link to="/Configuracion" className="card configuracion">
            <h2>Configuración</h2>
          </Link>
        </div>
      </main>

    </>
  );
};

export default Catalog;
