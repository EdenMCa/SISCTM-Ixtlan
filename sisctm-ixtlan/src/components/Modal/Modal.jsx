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
  confirmDisabled = false
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <header className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="modal-close" onClick={onCancel}>&times;</button>
        </header>
        <div className="modal-body">
          {children}
        </div>
        <footer className="modal-footer">
          <CancelButton onClick={onCancel} />
          <AcceptButton onClick={onConfirm} disabled={confirmDisabled} />
        </footer>
      </div>
    </div>
  );
};

export default Modal;
