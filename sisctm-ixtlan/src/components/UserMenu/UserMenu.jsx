import React, { useState, useRef, useEffect } from "react";
import '../../style/Nav/Nav.css'; 
import logo_ixtlan from '../../assets/logo_ixtlan.png'; 
import usuario from '../../assets/UserMenu/usuario.png';

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <button onClick={() => (window.location.href = '/Home')}>Inicio</button>
        <button onClick={() => (window.location.href = '/Cobrar')}>Cobrar</button>
        <button onClick={() => (window.location.href = '/public/GestionContribuyentes/gestion_contribuyentes.html')}>Contribuyentes</button>
        <button onClick={() => (window.location.href = '/Catalog')}>Catálogos</button>
        <span className="user-icon" ref={dropdownRef}>
          <img
            src={usuario}
            alt="Usuario"
            style={{ width: 32, height: 32, borderRadius: "50%", cursor: "pointer" }}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          <div className={`user-dropdown${dropdownOpen ? " show" : ""}`}>
            <button onClick={() => alert('Información del usuario')}>Información del usuario</button>
            <button onClick={() => alert('Editar perfil')}>Editar perfil</button>
            <button onClick={() => window.location.href = '/public/InicioSesion/inicio_sesion.html'}>Cerrar sesión</button>
          </div>
        </span>
      </nav>
    </header>
  );
};

export default Nav;