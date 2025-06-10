import React from 'react';
import logo_ixtlan from '../../assets/logo_ixtlan.png';
import logo_mex from '../../assets/logo_mex.png';
import '../../style/Nav/LoginNavStyle.css';
import '../../App.css';

const NavLogin = () => {
  return (
    <div className="nav-login">
      <div className="logo-left">
        <img src={logo_ixtlan} alt="Logo Ixtlán" />
      </div>
      <div className="title-center">
        <h1>SISTEMA DE COBROS MUNICIPAL</h1>
      </div>
      <div className="logo-right">
        <img src={logo_mex} alt="Logo México" />
      </div>
    </div>
  );
};

export default NavLogin;
