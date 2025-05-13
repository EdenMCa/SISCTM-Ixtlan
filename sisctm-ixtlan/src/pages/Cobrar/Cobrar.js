import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav'; 
import Footer from '../../components/Footer';
import '../../style/Cobrar.css';



const Cobrar = () => {
  // Estados
  const [modalVisible, setModalVisible] = useState(false);
  const [montoInicial, setMontoInicial] = useState('');
  const [folio, setFolio] = useState('');
  const [fecha, setFecha] = useState('');
  const [ejercicioFiscal, setEjercicioFiscal] = useState('');
  const [formData, setFormData] = useState({
    ejercicioPeriodo: '',
    contribuyente: '',
    domicilio: '',
    cuentaContable: '',
    cuentaReferencia: '',
    baseCatastral: '',
    formaPago: '',
    descripcion: '',
    subtotal: '',
    descuento: '0',
    descuentoAdicional: '0',
    motivoDescuento: 'No Aplica',
    cantidadLetra: '',
  });

  // useEffect inicial
  useEffect(() => {
    // Folio
    let ultimo = sessionStorage.getItem('ultimoFolio');
    let nuevo = ultimo ? parseInt(ultimo, 10) + 1 : 1;
    sessionStorage.setItem('ultimoFolio', nuevo);
    setFolio(`REC-${String(nuevo).padStart(4, '0')}`);

    // Fecha y ejercicio
    const hoy = new Date();
    const yyyy = hoy.getFullYear();
    const mm = String(hoy.getMonth() + 1).padStart(2, '0');
    const dd = String(hoy.getDate()).padStart(2, '0');
    setFecha(`${yyyy}-${mm}-${dd}`);
    setEjercicioFiscal(`${yyyy}`);

    // Mostrar modal apertura
    if (!localStorage.getItem('cajaAbierta')) {
      setModalVisible(true);
    }
  }, []);

  // Manejadores
  const handleApertura = () => {
    const monto = parseFloat(montoInicial);
    if (!isNaN(monto) && monto >= 0) {
      localStorage.setItem('cajaAbierta', 'true');
      localStorage.setItem('montoInicial', monto);
      setModalVisible(false);
    } else {
      alert('Ingrese una cantidad correcta por favor');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(f => ({ ...f, [name]: value }));
    // Aquí podrías convertir subtotal a letras y setCantidadLetra
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cobro guardado', { folio, fecha, ejercicioFiscal, ...formData });
    // Lógica real de guardado...
  };

  return (
    <div className="page-container">
      <Nav />

      <div className="content-wrap">
        {/* Título centrado arriba */}
        <div className="title-section title-top">
          <h2>Generar Nuevo Recibo</h2>
          <hr className="title-line" />
        </div>

        {/* Modal Apertura de Caja */}
        {modalVisible && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Apertura de Caja</h2>
              <p>Ingrese el monto inicial</p>
              <input
                type="text"
                id="montoInicialCaja"
                value={montoInicial}
                onChange={e => setMontoInicial(e.target.value)}
                required
              />
              <div className="modal-actions">
                <button id="btnConfirmarApertura" onClick={handleApertura}>
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}

        <main className="main-container">
          <div className="form-container">
            <form id="receiptForm" onSubmit={handleSubmit}>
              {/* Fila 1 */}
              <div className="form-row-3cols">
                <div className="form-group">
                  <label>Folio:</label>
                  <input type="text" value={folio} readOnly />
                </div>
                <div className="form-group">
                  <label>Fecha:</label>
                  <input type="date" value={fecha} readOnly />
                </div>
                <div className="form-group">
                  <label>Ejercicio Fiscal:</label>
                  <input type="text" value={ejercicioFiscal} readOnly />
                </div>
              </div>
              {/* Fila 2 */}
              <div className="form-row-3cols">
                <div className="form-group">
                  <label>Periodo:</label>
                  <input
                    type="text"
                    name="ejercicioPeriodo"
                    value={formData.ejercicioPeriodo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Contribuyente:</label>
                  <select
                    name="contribuyente"
                    value={formData.contribuyente}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona</option>
                    <option value="1">Juan Pérez López</option>
                    <option value="2">María García Hernández</option>
                    <option value="3">Carlos Martínez Jiménez</option>
                    <option value="4">Ana Rodríguez Sánchez</option>
                    <option value="5">Pedro Gómez Ramírez</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Domicilio:</label>
                  <select
                    name="domicilio"
                    value={formData.domicilio}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona</option>
                    <option value="Calle Constitución #12, San Francisco">
                      Calle Constitución #12, San Francisco
                    </option>
                    <option value="Avenida Juárez #456, Col. Reforma">
                      Avenida Juárez #456, Col. Reforma
                    </option>
                    <option value="Calle Morelos #789, Barrio Alto">
                      Calle Morelos #789, Barrio Alto
                    </option>
                    <option value="Boulevard Hidalgo #101, Zona Norte">
                      Boulevard Hidalgo #101, Zona Norte
                    </option>
                    <option value="Callejón del Rosario #234, Centro">
                      Callejón del Rosario #234, Centro
                    </option>
                  </select>
                </div>
              </div>
              {/* Cuenta Contable */}
              <div className="form-group full-width">
                <label>Cuenta Contable:</label>
                <select
                  name="cuentaContable"
                  value={formData.cuentaContable}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona</option>
                  <option value="100000">100000 - Impuestos</option>
                  <option value="110000">
                    110000 - Impuestos sobre los ingresos
                  </option>
                  <option value="110100">
                    110100 - Rifas, Sorteos y Concursos
                  </option>
                  <option value="110101">110101 - Rifas</option>
                  <option value="110102">110102 - Sorteos</option>
                </select>
              </div>
              {/* Fila 3 */}
              <div className="form-row-3cols">
                <div className="form-group">
                  <label>Motivo de Pago:</label>
                  <select
                    name="cuentaReferencia"
                    value={formData.cuentaReferencia}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona</option>
                    <option value="cuentaConexion">Conexión</option>
                    <option value="cuentaAlquiler">Alquiler</option>
                    <option value="cuentaBaseCatastral">Base Catastral</option>
                    <option value="cuentaEstablecimiento">Establecimiento</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Clave del Pago:</label>
                  <input
                    type="text"
                    name="baseCatastral"
                    value={formData.baseCatastral}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Forma de Pago:</label>
                  <select
                    name="formaPago"
                    value={formData.formaPago}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona</option>
                    <option value="EFECTIVO">Efectivo</option>
                    <option value="TARJETA_DEBITO">Tarjeta de Débito</option>
                    <option value="TARJETA_CREDITO">Tarjeta de Crédito</option>
                    <option value="TRANSFERENCIA">Transferencia</option>
                    <option value="CHEQUE">Cheque</option>
                  </select>
                </div>
              </div>
              {/* Descripción */}
              <div className="form-group full-width">
                <label>Descripción:</label>
                <input
                  type="text"
                  name="descripcion"
                  list="descripciones"
                  value={formData.descripcion}
                  onChange={handleChange}
                  required
                />
                <datalist id="descripciones">
                  <option value="Pago de impuesto predial anual" />
                  <option value="Pago de servicio de agua potable" />
                  <option value="Contribución por alumbrado público" />
                  <option value="Pago de recolección de basura" />
                  <option value="Derechos por licencia de construcción" />
                </datalist>
              </div>
              {/* Fila 4 */}
              <div className="form-row-3cols">
                <div className="form-group">
                  <label>Subtotal:</label>
                  <input
                    type="text"
                    name="subtotal"
                    value={formData.subtotal}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Descuento:</label>
                  <select
                    name="descuento"
                    value={formData.descuento}
                    onChange={handleChange}
                    required
                  >
                    <option value="0">0%</option>
                    <option value="20">20%</option>
                    <option value="50">50%</option>
                    <option value="70">70%</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Descuento Adicional (Ene-Feb):</label>
                  <select
                    name="descuentoAdicional"
                    value={formData.descuentoAdicional}
                    onChange={handleChange}
                    required
                  >
                    <option value="0">0%</option>
                    <option value="20">20%</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Total:</label>
                  <input type="text" name="total" readOnly />
                </div>
              </div>
              {/* Fila 5 */}
              <div className="form-row-2cols">
                <div className="form-group">
                  <label>Motivo Descuento:</label>
                  <select
                    name="motivoDescuento"
                    value={formData.motivoDescuento}
                    onChange={handleChange}
                    required
                  >
                    <option value="No Aplica">No Aplica</option>
                    <option value="Ciudadano Cumplido">Ciudadano Cumplido</option>
                    <option value="Adulto Mayor">Adulto Mayor</option>
                    <option value="Discapacidad">Discapacidad</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Total en Letra:</label>
                  <input type="text" name="cantidadLetra" readOnly />
                </div>
              </div>
              {/* Acciones */}
              <div className="form-actions">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => window.history.back()}
                >
                  Cancelar
                </button>
                <button type="submit" id="btnGuardarRecibo">
                  Cobrar
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Cobrar;