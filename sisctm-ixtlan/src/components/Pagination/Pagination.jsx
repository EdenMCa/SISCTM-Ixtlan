import React from 'react';
import '../../style/Pagination/Pagination.css';

const Pagination = ({
  totalItems,
  rowsPerPage,
  currentPage,
  onPageChange,
  maxButtons = 5
}) => {
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  if (totalPages <= 1) return null;

  // Calcula rango de páginas a mostrar
  const half = Math.floor(maxButtons / 2);
  let start = Math.max(1, currentPage - half);
  let end = Math.min(totalPages, currentPage + half);

  // Ajusta si estamos cerca de los extremos
  if (currentPage <= half) {
    end = Math.min(totalPages, maxButtons);
  }
  if (currentPage + half > totalPages) {
    start = Math.max(1, totalPages - maxButtons + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {/* Botón Anterior */}
      <button
        className="btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        « Anterior
      </button>

      {/* Primera página y puntos suspensivos */}
      {start > 1 && (
        <>
          <button className="btn" onClick={() => onPageChange(1)}>1</button>
          {start > 2 && <span className="ellipsis">…</span>}
        </>
      )}

      {/* Botones de páginas dinámicas */}
      {pages.map((page) => (
        <button
          key={page}
          className={`btn ${page === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Última página y puntos suspensivos */}
      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="ellipsis">…</span>}
          <button className="btn" onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </button>
        </>
      )}

      {/* Botón Siguiente */}
      <button
        className="btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente »
      </button>
    </div>
  );
};

export default Pagination;
