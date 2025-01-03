import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    onSearch(term);
  };

  return (
    <div className="SearchBar">
      <label>Enter a song: 
        <input
          placeholder="Enter a song, album, or artist"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>SEARCH</button>
    </div>
  );
}
