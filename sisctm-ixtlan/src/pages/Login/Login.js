import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/Nav/LoginStyle.css';

export const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === 'admin' && contraseña === 'admin') {
      navigate('/home'); 
    } else {
      setMensaje('Usuario o contraseña incorrectos');
      setModalVisible(true);
    }
  };

  const cerrarModal = () => setModalVisible(false);

  return (
    <div className="main-container">
      <div className="contenedor-inicio-sesion">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="modal-contenido"
            type="text"
            placeholder="Nombre del usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
          <input
            className="modal-contenido"
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
          <input className="modal-boton" type="submit" value="INGRESAR" />
        </form>
      </div>

      {modalVisible && (
        <div className="modal" onClick={cerrarModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <p>{mensaje}</p>
            <button className="modal-boton" onClick={cerrarModal}>
              Confirmar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
