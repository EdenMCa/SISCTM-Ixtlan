// src/components/UserMenu/UserMenu.jsx
import React, { useState, useRef, useEffect } from "react";
import usuarioIcon from '../../assets/UserMenu/usuario.png';
import "../../style/UserMenu/UserMenu.css";

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div className="user-menu" ref={ref}>
      <img
        src={usuarioIcon}
        alt="Usuario"
        className="user-menu__icon"
        onClick={() => setOpen(!open)}
      />
      <div className={`user-menu__dropdown${open ? " user-menu__dropdown--show" : ""}`}>
        <button
          id="userInfoBtn"
          onClick={() => alert('Este botón mostrará la información del usuario.')}
        >
          Información del usuario
        </button>
        <button
          id="settingsBtn"
          onClick={() => alert('Este botón abrirá la configuración del usuario.')}
        >
          Editar perfil
        </button>
        <button
          id="logoutBtn"
          onClick={() => (window.location.href = '/')}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
