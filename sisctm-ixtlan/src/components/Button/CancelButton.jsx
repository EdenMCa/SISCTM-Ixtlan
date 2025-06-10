import React from 'react';
import '../../style/Button/Button.css';

const CancelButton = ({ onClick, disabled = false }) => (
  <button
    className="btn-cancel"
    onClick={onClick}
    disabled={disabled}
  >
    Cancelar
  </button>
);

export default CancelButton;
