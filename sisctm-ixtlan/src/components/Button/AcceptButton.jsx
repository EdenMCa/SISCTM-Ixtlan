import React from 'react';
import '../../style/Button/Button.css';

const AcceptButton = ({ onClick, disabled = false }) => (
  <button
    className="btn-accept"
    onClick={onClick}
    disabled={disabled}
  >
    Aceptar
  </button>
);

export default AcceptButton;
