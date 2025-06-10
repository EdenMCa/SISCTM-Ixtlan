import React from 'react';
import '../../style/Modal/InfoModal.css';

const InfoModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="info-modal-overlay">
      <div className="info-modal-content">
        <button className="info-modal-close" onClick={onClose}>&times;</button>
        {title && <h3 className="info-modal-title">{title}</h3>}
        <div className="info-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
