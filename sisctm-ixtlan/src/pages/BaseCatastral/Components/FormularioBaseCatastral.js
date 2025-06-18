import React from 'react';
import '../../../style/BaseCatastral/FormularioBaseCatastral.css';

const FormularioBaseCatastral = () => (
  <form className="form-base-catastral">
    <div className="form-row">
      <div className="form-group">
        <label>Clave catastral:</label>
        <input type="text" placeholder="Ej. CLAVE-123" />
      </div>
      <div className="form-group">
        <label>Base catastral:</label>
        <input type="text" placeholder="Ej. 1500 m²" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <label>Nombre propietario:</label>
        <input type="text" placeholder="Ej. Juan Pérez" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <label>Ubicación:</label>
        <input type="text" placeholder="Ej. Calle Falsa 123" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <label>Valor terreno:</label>
        <input type="number" placeholder="Ej. 50000" />
      </div>
      <div className="form-group">
        <label>Valor construcción:</label>
        <input type="number" placeholder="Ej. 75000" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <label>Impuesto calculado:</label>
        <input type="number" placeholder="Ej. 1250" />
      </div>
      <div className="form-group">
        <label>Uso de suelo:</label>
        <select>
          <option>Selecciona un uso</option>
          {/* Agrega más opciones aquí */}
        </select>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <label>Fecha avalúo:</label>
        <input type="date" placeholder="dd/mm/aaaa" />
      </div>
      <div className="form-group">
        <label>Historial avalúos:</label>
        <input type="text" placeholder="Ej. 2021,2022" />
      </div>
    </div>
  </form>
);

export default FormularioBaseCatastral;
