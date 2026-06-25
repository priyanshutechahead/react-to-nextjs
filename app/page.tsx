'use client';

import { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import SearchBar from '../components/SearchBar';
import { SCIENTISTS } from '../data/scientists';
import { useApp } from '../context/AppContext';

export default function Home() {
  const { searchTerm, professionFilter } = useApp();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = 'Scientists Information';
  }, []);

  const filteredScientists = SCIENTISTS.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (professionFilter === 'All' || s.profession === professionFilter)
  );

  if (isLoading) {
    return <div className="loading">Loading scientists...</div>;
  }

  return (
    <div className="page-content">
      <h1>Notable Scientists</h1>

      <SearchBar />

      <div className="gallery-grid">
        {filteredScientists.length > 0 ? (
          filteredScientists.map((scientist) => (
            <ProfileCard
              key={scientist.id}
              scientist={scientist}
            />
          ))
        ) : (
          <p className="no-results">
            No scientists found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
}