import React, { useState, useRef, useEffect } from "react";
import usuarioImg from '../../assets/usuario.png';
import '../../style/UserMenu/UserMenu.css';

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Cierra el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="user-menu" ref={ref}>
      <img
        src={usuarioImg}
        alt="Usuario"
        className="user-menu__icon"
        onClick={() => setOpen(o => !o)}
      />
      {open && (
        <div className="user-menu__dropdown">
          <button onClick={() => alert('Información del usuario')}>
            Información del usuario
          </button>
          <button onClick={() => alert('Editar perfil')}>
            Editar perfil
          </button>
          <button onClick={() => window.location.href = '/Login'}>
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
