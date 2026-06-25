'use client';

import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function SearchBar(){
  const {
    searchTerm,
    setSearchTerm,
    professionFilter,
    setProfessionFilter,
  } = useApp();

  const [error, setError] = useState<string>('');

  const handleSearchChange = (val: string): void => {
    // Simple validation: No numbers allowed in search
    if (/\d/.test(val)) {
      setError('Search term cannot contain numbers.');
    } else {
      setError('');
      setSearchTerm(val);
    }
  };

  return (
    <div className="search-controls">
      <div className="controls-row">
        <div className="input-group">
          <input
            type="text"
            className={`search-bar ${error ? 'input-error' : ''}`}
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSearchChange(e.target.value)
            }
          />

          {error && <span className="error-text">{error}</span>}
        </div>

        <select
          className="filter-select"
          value={professionFilter}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setProfessionFilter(e.target.value)
          }
        >
          <option value="All">All Professions</option>
          <option value="physicist and chemist">Physicist &amp; Chemist</option>
          <option value="geochemist">Geochemist</option>
          <option value="theoretical physicist">theoretical physicist</option>
          <option value="physicist">Physicist</option>
          <option value="physicist and astronomer">physicist &amp; astronomer</option>
          <option value="nuclear physicist">nuclear physicist</option>
          <option value="mathematician">mathematician</option>
        </select>
      </div>
    </div>
  );
}