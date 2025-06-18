// Importación de React y hooks necesarios
import React, { useState } from 'react';
import '../../style/BaseCatastral/BaseCatastral.css';
import TitleSection from '../../components/TitleSection';
import SearchInput from '../../components/SearchInput';
import Table from '../../components/TableModule/TableModule';

const GestionRecibo = () => {
    // Datos base simulados
    const initialData = [
        {

        },
        {

        }
    ];

    const [bases, setBases] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');

    // Maneja el cambio del input de búsqueda
    const handleSearchChange = e => {
        setSearchTerm(e.target.value);
    };


    // Definimos las columnas que queremos mostrar en la tabla
    const columns = [
        { key: 'folio', label: 'Folio' },
        { key: 'fecha', label: 'Fecha' },
        { key: 'contribuyente', label: 'Contribuyente' },
        { key: 'ejercicio', label: 'Ejercicio' },
        { key: 'periodo', label: 'Periodo' },
        { key: 'concepto', label: 'Concepto' },
        { key: 'total', label: 'Total' },
        { key: 'formaPago', label: 'Forma de pago' },
        { key: 'acciones', label: 'Acciones' }
    ];
    
return (
        <>
            {/* Título principal de la sección */}
            <div className="gestion-recibo-container">
                <TitleSection
                    title="Gestión de Recibos"
                    subtitle=""
                />
            </div>


            {/* Encabezado con el buscador y el botón de agregar */}
            <div className="gestion-recibo-wrapper">
                <div className="gestion-recibo-header">
                    <SearchInput
                        placeholder="Buscar por folio o nombre"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />

                </div>

                {/* Tabla con los datos */}
                <div className="gestion-recibo-table-container">
                    <Table columns={columns} data={initialData} />
                </div>
            </div>


        </>
    );
};
export default GestionRecibo;