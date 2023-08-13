import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Call the callback function with the search term
  };

  return (
    <div className="flex items-center justify-center absolute top-0 w-full h-full">
      <div className="bg-black bg-opacity-50 rounded-full p-2 flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="border-none bg-transparent w-full p-2 focus:outline-none placeholder-white text-headingColor"
        />
      </div>
    </div>
  );
}

export default SearchBar;
