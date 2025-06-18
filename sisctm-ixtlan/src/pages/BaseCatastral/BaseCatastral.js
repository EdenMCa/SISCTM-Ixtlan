// Importación de React y hooks necesarios
import React, { useState } from 'react';
import '../../style/BaseCatastral/BaseCatastral.css';
import TitleSection from '../../components/TitleSection';
import AddButton from '../../components/Button/AddButton';
import SearchInput from '../../components/SearchInput';
import Table from '../../components/TableModule/TableModule';

const GestionBaseCatastral = () => {
    // Datos base simulados
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

    const [bases, setBases] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');

    // Maneja el cambio del input de búsqueda
    const handleSearchChange = e => {
        setSearchTerm(e.target.value);
    };

    // Lógica para agregar un nuevo registro
    const handleAdd = () => {
        // Aquí se puede abrir un modal o formulario para añadir un nuevo dato
        console.log("Agregar nuevo registro");
    };

    // Definimos las columnas que queremos mostrar en la tabla
    const columns = [
        { key: 'claveCatastral', label: 'Clave catastral' },
        { key: 'nombrePropietario', label: 'Nombre propietario' },
        { key: 'ubicacion', label: 'Ubicación' },
        { key: 'baseCatastral', label: 'Base catastral' },
        { key: 'usoSuelo', label: 'Uso de suelo' },
        { key: 'valorConstruccion', label: 'Acciones' },
    ];

    const filteredData = bases.filter(base =>
        base.claveCatastral.toLowerCase().includes(searchTerm.toLowerCase()) ||
        base.nombrePropietario.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* Título principal de la sección */}
            <div className="gestion-base-catastral-container">
                <TitleSection
                    title="Gestión de Base Catastral"
                    subtitle=""
                />
            </div>


            {/* Encabezado con el buscador y el botón de agregar */}
            <div className="gestion-base-catastral-wrapper">
                <div className="gestion-base-catastral-header">
                    <SearchInput
                        placeholder="Buscar por clave catastral o nombre"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />

                    <AddButton onClick={handleAdd} />
                </div>

                {/* Tabla con los datos */}
                <div className="gestion-base-catastral-table-container">
                    <Table columns={columns} data={initialData} />
                </div>
            </div>


        </>
    );
};

export default GestionBaseCatastral;
