import React from 'react';
import '../style/SearchInput.css';

const SearchInput = ({ placeholder, value, onChange }) => {
  return (
    <div className="search-input">
      <input
        type="text"
        className="search-input__field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className="search-input__icon">&#128269;</span> {/* ícono de lupa */}
    </div>
  );
};

export default SearchInput;
