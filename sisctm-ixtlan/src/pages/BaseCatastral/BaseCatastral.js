import React, { useState, useEffect } from 'react';
import '../../style/BaseCatastral/BaseCatastral.css';
import Nav from '../../components/Nav/Nav';

function App() {
  // Datos iniciales
  const initialData = [
    {
      claveCatastral: "CLAVE-123",
      nombrePropietario: "Juan Pérez",
      ubicacion: "Calle Falsa 123",
      baseCatastral: "1500 m²",
      valorTerreno: 50000,
      valorConstruccion: 75000,
      impuestoCalculado: 1250,
      fechaAvaluo: "2023-05-10",
      historialAvaluos: "2021,2022",
      usoSuelo: "habitacional"
    },
    {
      claveCatastral: "CLAVE-456",
      nombrePropietario: "María López",
      ubicacion: "Av. Siempre Viva 742",
      baseCatastral: "2000 m²",
      valorTerreno: 60000,
      valorConstruccion: 90000,
      impuestoCalculado: 1500,
      fechaAvaluo: "2023-06-15",
      historialAvaluos: "2022",
      usoSuelo: "comercial"
    }
  ];

  // Estados globales
  const [bases, setBases] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewData, setViewData] = useState(null);

  // Estado del formulario
  const [formData, setFormData] = useState({
    claveCatastral: '',
    nombrePropietario: '',
    ubicacion: '',
    baseCatastral: '',
    valorTerreno: '',
    valorConstruccion: '',
    impuestoCalculado: '',
    fechaAvaluo: '',
    historialAvaluos: '',
    usoSuelo: ''
  });

  // Resetear formulario al cerrar modal
  useEffect(() => {
    if (!showFormModal) {
      setFormData({
        claveCatastral: '',
        nombrePropietario: '',
        ubicacion: '',
        baseCatastral: '',
        valorTerreno: '',
        valorConstruccion: '',
        impuestoCalculado: '',
        fechaAvaluo: '',
        historialAvaluos: '',
        usoSuelo: ''
      });
      setIsEditing(false);
      setCurrentIndex(null);
    }
  }, [showFormModal]);

  // Filtrado y paginación
  const filtered = bases.filter(b =>
    b.claveCatastral.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.nombrePropietario.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const start = (currentPage - 1) * rowsPerPage;
  const paginated = filtered.slice(start, start + rowsPerPage);

  // Handlers
  const handleSearch = e => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const openAddModal = () => setShowFormModal(true);
  const closeAddModal = () => setShowFormModal(false);

  const handleEdit = index => {
    const base = bases[index];
    setFormData({ ...base });
    setIsEditing(true);
    setCurrentIndex(index);
    setShowFormModal(true);
  };

  const handleDelete = index => {
    if (window.confirm('¿Confirmar eliminación?')) {
      const newBases = [...bases];
      newBases.splice(index, 1);
      setBases(newBases);
      if (currentPage > Math.ceil((filtered.length - 1) / rowsPerPage) && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const handleView = index => {
    setViewData(bases[index]);
    setShowViewModal(true);
  };
  const closeViewModal = () => setShowViewModal(false);

  const handleChangePage = page => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isEditing) {
      const newBases = [...bases];
      newBases[currentIndex] = formData;
      setBases(newBases);
    } else {
      setBases([...bases, formData]);
    }
    closeAddModal();
  };

  return (
    <>
      <Nav />
      <main className="main-container">
        <div className="title-section">
          <h2>Gestión de Base Catastral</h2>
          <hr className="title-line" />
        </div>

        <div className="search-container">
          <input
            type="text"
            id="searchInput"
            placeholder="Buscar por clave catastral o nombre propietario"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="btn-agregar" onClick={openAddModal}>
            Agregar
          </button>
        </div>

        <div className="table-container">
          <table id="accountsTable">
            <thead>
              <tr>
                <th>Clave catastral</th>
                <th>Nombre propietario</th>
                <th>Ubicación</th>
                <th>Base catastral</th>
                <th>Uso de suelo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((base, idx) => (
                <tr key={start + idx}>
                  <td>{base.claveCatastral}</td>
                  <td>{base.nombrePropietario}</td>
                  <td>{base.ubicacion}</td>
                  <td>{base.baseCatastral}</td>
                  <td>{base.usoSuelo}</td>
                  <td>
                    <button
                      className="action-btn edit"
                      onClick={() => handleEdit(start + idx)}
                      title="Editar"
                    >
                      <img
                        src="/Assets/editor.png"
                        className="action-icon"
                        alt="Editar"
                      />
                    </button>
                    <button
                      className="action-btn delete"
                      onClick={() => handleDelete(start + idx)}
                      title="Eliminar"
                    >
                      <img
                        src="/Assets/eliminar.png"
                        className="action-icon"
                        alt="Eliminar"
                      />
                    </button>
                    <button
                      className="action-btn view"
                      onClick={() => handleView(start + idx)}
                      title="Ver información"
                    >
                      <img
                        src="/Assets/visualizar.png"
                        className="action-icon"
                        alt="Ver"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination-container">
          <div className="pagination">
            <button
              onClick={() => handleChangePage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              « Anterior
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
              <React.Fragment key={num}>
                {(num === 1 ||
                  num === totalPages ||
                  (num >= currentPage - 2 && num <= currentPage + 2)) && (
                  <button
                    className={num === currentPage ? 'active' : ''}
                    onClick={() => handleChangePage(num)}
                  >
                    {num}
                  </button>
                )}
                {num === 2 && currentPage > 4 && <span>...</span>}
                {num === totalPages - 1 && currentPage < totalPages - 3 && <span>...</span>}
              </React.Fragment>
            ))}
            <button
              onClick={() => handleChangePage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Siguiente »
            </button>
          </div>
        </div>
      </main>

      {/* Modal Formulario */}
      {showFormModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="btn-close" onClick={closeAddModal}>
              &times;
            </span>
            <div className="form-container" id="formContainer">
              <h3 className="text-center" id="formTitle">
                {isEditing ? 'Editar Base Catastral' : 'Agregar Base Catastral'}
              </h3>
              <form id="accountForm" onSubmit={handleSubmit}>
                <div className="form-inline">
                  <div className="form-group">
                    <label htmlFor="claveCatastral">Clave catastral:</label>
                    <input
                      type="text"
                      id="claveCatastral"
                      name="claveCatastral"
                      placeholder="Ej. CLAVE-123"
                      value={formData.claveCatastral}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="baseCatastral">Base catastral:</label>
                    <input
                      type="text"
                      id="baseCatastral"
                      name="baseCatastral"
                      placeholder="Ej. 1500 m²"
                      value={formData.baseCatastral}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="nombrePropietario">Nombre propietario:</label>
                  <input
                    type="text"
                    id="nombrePropietario"
                    name="nombrePropietario"
                    placeholder="Ej. Juan Pérez"
                    value={formData.nombrePropietario}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ubicacion">Ubicación:</label>
                  <input
                    type="text"
                    id="ubicacion"
                    name="ubicacion"
                    placeholder="Ej. Calle Falsa 123"
                    value={formData.ubicacion}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-inline">
                  <div className="form-group">
                    <label htmlFor="valorTerreno">Valor terreno:</label>
                    <input
                      type="number"
                      id="valorTerreno"
                      name="valorTerreno"
                      placeholder="Ej. 50000"
                      value={formData.valorTerreno}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="valorConstruccion">Valor construcción:</label>
                    <input
                      type="number"
                      id="valorConstruccion"
                      name="valorConstruccion"
                      placeholder="Ej. 75000"
                      value={formData.valorConstruccion}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-inline">
                  <div className="form-group">
                    <label htmlFor="impuestoCalculado">Impuesto calculado:</label>
                    <input
                      type="number"
                      id="impuestoCalculado"
                      name="impuestoCalculado"
                      placeholder="Ej. 1250"
                      value={formData.impuestoCalculado}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="usoSuelo">Uso de suelo:</label>
                    <select
                      id="usoSuelo"
                      name="usoSuelo"
                      value={formData.usoSuelo}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Selecciona un uso</option>
                      <option value="habitacional">Habitacional</option>
                      <option value="comercial">Comercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="mixto">Mixto</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
                <div className="form-inline">
                  <div className="form-group">
                    <label htmlFor="fechaAvaluo">Fecha avalúo:</label>
                    <input
                      type="date"
                      id="fechaAvaluo"
                      name="fechaAvaluo"
                      value={formData.fechaAvaluo}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="historialAvaluos">Historial avalúos:</label>
                    <input
                      type="text"
                      id="historialAvaluos"
                      name="historialAvaluos"
                      placeholder="Ej. 2021,2022"
                      value={formData.historialAvaluos}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-actions">
                  <button type="button" className="btn-cancel" onClick={closeAddModal}>
                    Cancelar
                  </button>
                  <button type="submit" id="btnAddOrUpdate">
                    {isEditing ? 'Actualizar' : 'Agregar'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal Ver Información */}
      {showViewModal && viewData && (
        <div className="modal-overlay" id="viewModalOverlay">
          <div className="modal-content">
            <span className="btn-close" onClick={closeViewModal}>
              &times;
            </span>
            <div className="form-container" id="viewContainer">
              <h3 className="text-center">Información</h3>
              <div id="infoContent">
                <p><strong>Clave Catastral:</strong> {viewData.claveCatastral}</p>
                <p><strong>Nombre Propietario:</strong> {viewData.nombrePropietario}</p>
                <p><strong>Ubicación:</strong> {viewData.ubicacion}</p>
                <p><strong>Base Catastral:</strong> {viewData.baseCatastral}</p>
                <p><strong>Valor Terreno:</strong> {viewData.valorTerreno}</p>
                <p><strong>Valor Construcción:</strong> {viewData.valorConstruccion}</p>
                <p><strong>Impuesto Calculado:</strong> {viewData.impuestoCalculado}</p>
                <p><strong>Fecha Avalúo:</strong> {viewData.fechaAvaluo}</p>
                <p><strong>Historial Avalúos:</strong> {viewData.historialAvaluos}</p>
                <p><strong>Uso de Suelo:</strong> {viewData.usoSuelo}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
