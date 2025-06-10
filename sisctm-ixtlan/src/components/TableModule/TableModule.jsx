import React from 'react';
import IconButton from '../IconButton/IconButton.jsx';
import '../../style/TableModule/TableModule.css';


const Table = ({ columns, data, actions }) => (
  <table className="table">
    <thead>
      <tr>
        {columns.map(({ key, label }) => (
          <th key={key}>{label}</th>
        ))}
        {actions && <th>Acciones</th>}
      </tr>
    </thead>
    <tbody>
      {data.length === 0 ? (
        <tr>
          <td colSpan={columns.length + (actions ? 1 : 0)} className="no-data">
            No hay datos para mostrar.
          </td>
        </tr>
      ) : (
        data.map((row, idx) => (
          <tr key={idx}>
            {columns.map(({ key }) => (
              <td key={key}>{row[key]}</td>
            ))}
            {actions && (
              <td>
                {actions.map(({ iconSrc, alt, onClick, title, variant }, i) => (
                  <IconButton
                    key={i}
                    iconSrc={iconSrc}
                    alt={alt}
                    onClick={() => onClick(row)}
                    title={title}
                    variant={variant}
                  />
                ))}
              </td>
            )}
          </tr>
        ))
      )}
    </tbody>
  </table>
);

export default Table;
