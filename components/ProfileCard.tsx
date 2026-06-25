'use client';

import { getImageUrl } from '../utils';
import { useApp } from '../context/AppContext';

interface Scientist {
  id: number;
  name: string;
  imageId: string;
  profession: string;
  awards: string[];
  discovery: string;
}

interface ProfileCardProps {
  scientist: Scientist;
}

export default function ProfileCard({
  scientist,
}: ProfileCardProps) {
  const { favorites, toggleFavorite } = useApp();

  const isFavorite = favorites.includes(scientist.id);

  return (
    <section className="profile-card">
      <h2>{scientist.name}</h2>

      <img
        className="avatar"
        src={getImageUrl(scientist.imageId)}
        alt={scientist.name}
        width={70}
        height={70}
      />

      <ul>
        <li>
          <b>Profession: </b>
          {scientist.profession}
        </li>

        <li>
          <b>Awards: {scientist.awards.length} </b>
          ({scientist.awards.join(', ')})
        </li>

        <li>
          <b>Discovered: </b>
          {scientist.discovery}
        </li>
      </ul>

      <button
        className={`fav-button ${isFavorite ? 'is-fav' : ''}`}
        onClick={() => toggleFavorite(scientist.id)}
      >
        {isFavorite ? '❤️ Favorited' : '🤍 Add to Favorites'}
      </button>
    </section>
  );
}