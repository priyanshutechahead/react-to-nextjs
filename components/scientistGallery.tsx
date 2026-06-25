'use client';

import { useApp } from '../context/AppContext';
import type { Scientist } from '../data/scientists';
import ProfileCard from './ProfileCard';
import SearchBar from './SearchBar';

interface ScientistGalleryProps {
  initialScientists: Scientist[];
}

export default function ScientistGallery({
  initialScientists,
}: ScientistGalleryProps) {
  const { searchTerm, professionFilter } = useApp();

  const filteredScientists = initialScientists.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (professionFilter === 'All' || s.profession === professionFilter)
  );

  return (
    <>
      <SearchBar />

      <div className="gallery-grid">
        {filteredScientists.length > 0 ? (
          filteredScientists.map((s) => (
            <ProfileCard key={s.id} scientist={s} />
          ))
        ) : (
          <p className="no-results">
            No scientists found matching your criteria.
          </p>
        )}
      </div>
    </>
  );
}