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
    </div>
  );
};

export default SearchInput;
