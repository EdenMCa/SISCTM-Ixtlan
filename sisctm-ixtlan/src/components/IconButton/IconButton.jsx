import React from 'react';
import '../../style/IconButton/IconButton.css'; 
import editIcon from '../../assets/Icons/editor.png';
import deleteIcon from '../../assets/Icons/eliminar.png';
import viewIcon from '../../assets/Icons/expediente.png';

const icons = {
  edit: editIcon,
  delete: deleteIcon,
  view: viewIcon,
};

const IconButton = ({ variant = 'view', onClick, title }) => {
  const iconSrc = icons[variant] || icons.view;

  return (
    <button
      className={`icon-button ${variant}`}
      onClick={onClick}
      title={title}
    >
      <img src={iconSrc} alt={title} className="icon-button__img" />
    </button>
  );
};

export default IconButton;