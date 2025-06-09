import React from "react";
import '../../style/Nav/Nav.css'; 
import logo_ixtlan from '../../assets/logo_ixtlan.png'; 


const Nav = () => {
  return (
    <header>
      <div className="header-left">
        <div className="logo-left">
          <img src={logo_ixtlan} alt="Logo Ixtlán" />
        </div>
        <div className="title">
          <h1>SISTEMA DE COBROS MUNICIPAL</h1>
        </div>
      </div>

      <nav className="menu-buttons">
        <button onClick={() => (window.location.href = '/Home')}>
          Inicio
        </button>
        <button onClick={() => (window.location.href = '/Cobrar')}>
          Cobrar
        </button>
        <button
          onClick={() => (window.location.href = "/public/GestionContribuyentes/gestion_contribuyentes.html")}
        >
          Contribuyentes
        </button>
        <button onClick={() => (window.location.href = '/Catalog')}>
          Catálogos
        </button>
      </nav>
    </header>
  );
};

export default Nav;
