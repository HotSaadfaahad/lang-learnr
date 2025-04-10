import React from 'react';

const SearchBar = ({ query, onChange }) => (
  <input
    type="text"
    value={query}
    onChange={(e) => onChange(e.target.value)}
    className="w-full p-2 border rounded-xl shadow mb-4"
    placeholder="Search for a cryptocurrency..."
  />
);

export default SearchBar;
