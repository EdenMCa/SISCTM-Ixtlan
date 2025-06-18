// Importación de React y hooks necesarios
import React, { useState } from 'react';
import '../../style/BaseCatastral/BaseCatastral.css';
import TitleSection from '../../components/TitleSection';
import SearchInput from '../../components/SearchInput';
import Table from '../../components/TableModule/TableModule';
import Pagination from '../../components/Pagination/Pagination';

const GestionRecibos = () => {
    // Datos simulados
    const initialData = [
        {
            folio: "FOLIO-001",
            fecha: "2023-10-01",
            contribuyente: "Juan Pérez",
            ejercicio: "2023",
            periodo: "Enero - Marzo",
            concepto: "Pago de impuesto predial",
            total: 1500,
            formaPago: "Efectivo",
        },
        {
            folio: "FOLIO-002",
            fecha: "2023-10-02",
            contribuyente: "María López",
            ejercicio: "2023",
            periodo: "Abril - Junio",
            concepto: "Pago de agua potable",
            total: 800,
            formaPago: "Tarjeta de crédito"
        },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const handleSearchChange = e => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const columns = [
        { key: 'folio', label: 'Folio' },
        { key: 'fecha', label: 'Fecha' },
        { key: 'contribuyente', label: 'Contribuyente' },
        { key: 'ejercicio', label: 'Ejercicio' },
        { key: 'periodo', label: 'Periodo' },
        { key: 'concepto', label: 'Concepto' },
        { key: 'total', label: 'Total' },
        { key: 'formaPago', label: 'Forma de pago' },
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

    const filteredData = initialData.filter(item =>
        item.folio.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const paginatedData = filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return (
        <>
            <div className="gestion-recibo-container">
                <TitleSection
                    title="Gestión de Recibos"
                    subtitle=""
                />
            </div>

            <div className="gestion-recibo-wrapper">
                <div className="gestion-recibo-header">
                    <SearchInput
                        placeholder="Buscar por folio o nombre"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>

                <div className="gestion-recibo-table-container">
                    <Table columns={columns} data={paginatedData} actions={acciones} />
                </div>

                <div className="gestion-recibo-pagination">
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

export default GestionRecibos;
