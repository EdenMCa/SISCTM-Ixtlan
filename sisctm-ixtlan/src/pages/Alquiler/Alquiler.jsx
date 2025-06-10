import React, { useState } from 'react';

// Componentes importados
import TitleSection from '../../components/TitleSection.jsx';
import SearchInput from '../../components/SearchInput.jsx';
import AddButton from '../../components/Button/AddButton.jsx';
import Table from '../../components/TableModule/TableModule.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import Modal from '../../components/Modal/Modal.jsx';
import InfoModal from '../../components/Modal/InfoModal.jsx';


// Datos iniciales (puedes traerlos de API o json)
const initialData = [
  { id: 1, nombre: 'Juan Pérez', direccion: 'Calle 123', telefono: '555-1234' },
  { id: 2, nombre: 'María López', direccion: 'Avenida 456', telefono: '555-5678' },
  // ... más datos
];

const BaseCatastralPage = () => {
  // Estados generales
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Modal control
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMode, setModalMode] = useState('add'); // 'add' | 'edit'
  const [selectedRow, setSelectedRow] = useState(null);

  // Info modal para ver
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [infoData, setInfoData] = useState(null);

  // Datos filtrados y paginados
  const filteredData = data.filter(item =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.direccion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.telefono.includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Columnas tabla
  const columns = [
    { key: 'nombre', label: 'Nombre' },
    { key: 'direccion', label: 'Dirección' },
    { key: 'telefono', label: 'Teléfono' }
  ];

  // Abrir modal para agregar
  const handleAddClick = () => {
    setModalTitle('Agregar registro');
    setModalMode('add');
    setSelectedRow(null);
    setModalOpen(true);
  };

  // Abrir modal para editar
  const handleEditClick = (row) => {
    setModalTitle('Editar registro');
    setModalMode('edit');
    setSelectedRow(row);
    setModalOpen(true);
  };

  // Abrir modal para ver
  const handleViewClick = (row) => {
    setInfoData(row);
    setInfoModalOpen(true);
  };

  // Eliminar registro
  const handleDeleteClick = (row) => {
    if(window.confirm(`¿Eliminar registro de ${row.nombre}?`)) {
      setData(data.filter(item => item.id !== row.id));
    }
  };

  // Guardar datos (Agregar o Editar)
  const handleModalConfirm = () => {
    const form = document.getElementById('modal-form');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const nombre = formData.get('nombre').trim();
    const direccion = formData.get('direccion').trim();
    const telefono = formData.get('telefono').trim();

    if (modalMode === 'add') {
      // Agregar nuevo con id autoincremental
      const newId = data.length > 0 ? Math.max(...data.map(d => d.id)) + 1 : 1;
      setData([...data, { id: newId, nombre, direccion, telefono }]);
    } else if (modalMode === 'edit' && selectedRow) {
      // Editar registro existente
      setData(data.map(item =>
        item.id === selectedRow.id ? { ...item, nombre, direccion, telefono } : item
      ));
    }

    setModalOpen(false);
  };

  // Cambiar página paginación
  const handlePageChange = (page) => {
    if(page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <TitleSection title="Base Catastral" subtitle="Gestión de registros" />

      <div className="controls-row">
        <SearchInput
          placeholder="Buscar por nombre, dirección o teléfono"
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <AddButton onClick={handleAddClick} />
      </div>

      <Table
        columns={columns}
        data={paginatedData}
        actions={[
          { variant: 'view', title: 'Ver', onClick: handleViewClick },
          { variant: 'edit', title: 'Editar', onClick: handleEditClick },
          { variant: 'delete', title: 'Eliminar', onClick: handleDeleteClick }
        ]}
      />

      <Pagination
        totalItems={filteredData.length}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {/* Modal para Agregar y Editar */}
      <Modal
        isOpen={modalOpen}
        title={modalTitle}
        onConfirm={handleModalConfirm}
        onCancel={() => setModalOpen(false)}
        confirmDisabled={false}
      >
        <form id="modal-form" className="modal-form" onSubmit={e => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              name="nombre"
              id="nombre"
              type="text"
              defaultValue={selectedRow ? selectedRow.nombre : ''}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="direccion">Dirección</label>
            <input
              name="direccion"
              id="direccion"
              type="text"
              defaultValue={selectedRow ? selectedRow.direccion : ''}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              name="telefono"
              id="telefono"
              type="text"
              defaultValue={selectedRow ? selectedRow.telefono : ''}
              pattern="\d{3}-\d{4}"
              title="Formato esperado: 555-1234"
              required
            />
          </div>
        </form>
      </Modal>

      {/* Modal para Visualizar */}
      <InfoModal
        isOpen={infoModalOpen}
        onClose={() => setInfoModalOpen(false)}
        title="Detalle del registro"
      >
        {infoData && (
          <div className="info-details">
            <p><strong>Nombre:</strong> {infoData.nombre}</p>
            <p><strong>Dirección:</strong> {infoData.direccion}</p>
            <p><strong>Teléfono:</strong> {infoData.telefono}</p>
          </div>
        )}
      </InfoModal>
    </div>
  );
};

export default BaseCatastralPage;
