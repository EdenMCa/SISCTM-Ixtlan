// Importación de React y hooks necesarios
import React, { useState } from 'react';
import '../../style/BaseCatastral/BaseCatastral.css';
import TitleSection from '../../components/TitleSection';
import AddButton from '../../components/Button/AddButton';
import SearchInput from '../../components/SearchInput';
import Table from '../../components/TableModule/TableModule';
import Pagination from '../../components/Pagination/Pagination';
import Modal from '../../components/Modal/Modal'; 
import FormularioBaseCatastral from './Components/FormularioBaseCatastral';

const GestionBaseCatastral = () => {
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
        },
    ];

    const [bases, setBases] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [modalAbierto, setModalAbierto] = useState(false); // Nuevo estado para el modal
    const rowsPerPage = 5;

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
        usoSuelo: '',
    });

    const handleSearchChange = e => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleAdd = () => {
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
            usoSuelo: '',
        });
        setModalAbierto(true);
    };

    const handleConfirmarModal = () => {
        setBases(prev => [formData, ...prev]);
        setModalAbierto(false);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCancelarModal = () => {
        setModalAbierto(false);
    };

    const columns = [
      { key: 'claveCatastral', label: 'Clave catastral' },
        { key: 'nombrePropietario', label: 'Nombre propietario' },
        { key: 'ubicacion', label: 'Ubicación' },
        { key: 'baseCatastral', label: 'Base catastral' },
        { key: 'usoSuelo', label: 'Uso de suelo' },
    ];

    const acciones = [
        {
            variant: 'edit',
            title: 'Editar',
            onClick: (row) => {
                console.log('Editar:', row);
            },
        },
        {
            variant: 'delete',
            title: 'Eliminar',
            onClick: (row) => {
                console.log('Eliminar:', row);
            },
        },
        {
            variant: 'view',
            title: 'Ver',
            onClick: (row) => {
                console.log('Ver:', row);
            },
        },
    ];

    const filteredData = bases.filter(base =>
        base.claveCatastral.toLowerCase().includes(searchTerm.toLowerCase()) ||
        base.nombrePropietario.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const paginatedData = filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return (
        <>
            <div className="gestion-container">
                <TitleSection title="Gestión de Base Catastral" subtitle="" />
            </div>

            <div className="gestion-wrapper">
                <div className="gestion-header">
                    <SearchInput
                        placeholder="Buscar por clave catastral o nombre"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <AddButton onClick={handleAdd} />
                </div>

                <div className="gestion-table-container">
                    <Table columns={columns} data={paginatedData} actions={acciones} />
                </div>

                <div className="gestion-pagination">
                    <Pagination
                        totalItems={filteredData.length}
                        rowsPerPage={rowsPerPage}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>

            {/* Modal para agregar nuevo registro */}
            <Modal
                isOpen={modalAbierto}
                title="Registrar Base Catastral"
                onConfirm={handleConfirmarModal}
                onCancel={handleCancelarModal}
                confirmDisabled={!formData.claveCatastral || !formData.nombrePropietario} // puedes ajustar validación
            >
                <FormularioBaseCatastral datos={formData} onChange={handleFormChange} />
            </Modal>
        </>
    );
};

export default GestionBaseCatastral;
