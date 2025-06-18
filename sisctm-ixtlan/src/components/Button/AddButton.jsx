import React from 'react';
import '../../style/Button/AddButton.css'; 

const AddButton = ({ onClick, children = 'Agregar' }) => {
  return (
    <button className="btn-agregar" onClick={onClick}>
      {children}
    </button>
  );
};

export default AddButton;
