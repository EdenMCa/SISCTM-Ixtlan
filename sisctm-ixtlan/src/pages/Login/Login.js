import React, { useState } from 'react'
import '../../style/LoginStyle.css'

export const Login = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [mensaje, setMensaje] = useState('');
  
    const cerrarModal = () => setModalVisible(false);
  
    const mostrarModal = (mensaje) => {
      setMensaje(mensaje);
      setModalVisible(true);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const usuario = e.target.nombre_usuario.value;
      const contraseña = e.target.contraseña.value;
  
      if (usuario === 'admin' && contraseña === 'admin') {
        window.location.href = '/inicio'; // Reemplaza con tu ruta real
      } else {
        mostrarModal('Usuario o contraseña incorrectos');
      }
    };

  return (
    <>
    <header className="login-header">
      <div className="logo-left">
        <img src="/Assets/logo_ixtlan.png" alt="Logo Ixtlán" />
      </div>
      <div className="title-center">
        <h1>SISTEMA DE COBROS MUNICIPAL</h1>
      </div>
      <div className="logo-right">
        <img src="/Assets/logo_me.png" alt="Logo México" />
      </div>
    </header>

    <div className="main-container">
      <div className="contenedor-inicio-sesion">
        <h2>Iniciar Sesión</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <input
            className="modal-contenido"
            type="text"
            name="nombre_usuario"
            placeholder="Nombre del usuario"
            required
          />
          <input
            className="modal-contenido"
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            required
          />
          <input className="modal-boton" type="submit" value="INGRESAR" />
        </form>
      </div>

      {modalVisible && (
        <div className="modal" onClick={cerrarModal}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <p>{mensaje}</p>
            <button className="modal-boton" onClick={cerrarModal}>
              Confirmar
            </button>
          </div>
        </div>
      )}
    </div>

    <footer className="footer">
      <p>© 2025 Ixtlán de Juárez</p>
    </footer>
  </>

  )
}

