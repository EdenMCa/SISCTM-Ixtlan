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
      {open && (
        <div className="user-menu__dropdown">
          <button onClick={() => alert('Información del usuario')}>
            Información del usuario
          </button>
          <button onClick={() => alert('Editar perfil')}>
            Editar perfil
          </button>
          <button onClick={() => window.location.href = '/'}>
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
