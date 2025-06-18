import React from 'react';
import '../../style/Modal/Modal.css';
import AcceptButton from '../Button/AcceptButton';
import CancelButton from '../Button/CancelButton';

const Modal = ({
  isOpen,
  title,
  children,
  onConfirm,
  onCancel,
  confirmText = "Aceptar",  // nuevo
  cancelText = "Cancelar",  // nuevo
  confirmDisabled = false,
  customClass = ""
}) => {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${customClass}`}>
      <div className="modal-content">
        <header className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="modal-close" onClick={onCancel}>&times;</button>
        </header>
        <div className="modal-body">
          {children}
        </div>
        <footer className="modal-footer">
          <CancelButton onClick={onCancel}>
            {cancelText}
          </CancelButton>
          <AcceptButton onClick={onConfirm} disabled={confirmDisabled}>
            {confirmText}
          </AcceptButton>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
