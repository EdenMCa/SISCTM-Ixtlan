// Importación de React y hooks necesarios
import React, { useState } from 'react';
import '../../style/BaseCatastral/BaseCatastral.css';
import TitleSection from '../../components/TitleSection';
import AddButton from '../../components/Button/AddButton';
import SearchInput from '../../components/SearchInput';
import Table from '../../components/TableModule/TableModule';
import Pagination from '../../components/Pagination/Pagination';
import iconEditar from '../../assets/Icons/editor.png';
import iconEliminar from '../../assets/Icons/eliminar.png';
import iconVer from '../../assets/Icons/expediente.png';


const CuentasContables = () => {
    // Datos base simulados
    const initialData = [
        {
            clave: "CLAVE-123",
            nombrePropietario: "Juan Pérez",
            estado: "1500",
        },
        {
            clave: "CLAVE-456",
            nombrePropietario: "María López",
            estado: "1300",
        },
        {
            clave: "CLAVE-234",
            nombrePropietario: "Elias Robles",
            estado: "1200",
        },
        {
            clave: "CLAVE-567",
            nombrePropietario: "Eden Mendoza",
            estado: "1100",
        },
        {
            clave: "CLAVE-765",
            nombrePropietario: "Elton Pérez",
            estado: "1000",
        },
        {
            clave: "CLAVE-678",
            nombrePropietario: "Diana Hernandez",
            estado: "1400",
        },
    ];

    const [bases, setBases] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    // Maneja el cambio del input de búsqueda
    const handleSearchChange = e => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reinicia la página cuando se busca
    };

    // Lógica para agregar un nuevo registro
    const handleAdd = () => {
        console.log("Agregar nueva Cuenta Contable");
    };

    // Definimos las columnas que queremos mostrar en la tabla
    const columns = [
        { key: 'clave', label: 'Clave' },
        { key: 'nombrePropietario', label: 'Nombre' },
        { key: 'estado', label: 'Estado' },
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
//   {
//     variant: 'view',
//     title: 'Ver',
//     onClick: (row) => {
//       console.log('Ver:', row);
//     },
//   },
];

    // Filtro de búsqueda
    const filteredData = bases.filter(base =>
        base.clave.toLowerCase().includes(searchTerm.toLowerCase()) ||
        base.nombrePropietario.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Paginación
    const paginatedData = filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return (
        <>
            {/* Título principal de la sección */}
            <div className="cuentas-contables-container">
                <TitleSection
                    title="Cuentas Contables"
                    subtitle=""
                />
            </div>

            {/* Encabezado con el buscador y el botón de agregar */}
            <div className="cuentas-contables-wrapper">
                <div className="cuentas-contables-header">
                    <SearchInput
                        placeholder="Buscar por clave o nombre"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />

                    <AddButton onClick={handleAdd} />
                </div>

                {/* Tabla con los datos paginados */}
                <div className="cuentas-contables-table-container">
                    <Table columns={columns} data={paginatedData} actions={acciones} />
                </div>

                {/* Componente de paginación */}
                <div className="cuentas-contables-pagination">
                    <Pagination
                        totalItems={filteredData.length}
                        rowsPerPage={rowsPerPage}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </>
    );
};

export default CuentasContables;
