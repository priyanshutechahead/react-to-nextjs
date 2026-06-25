'use client';

import Link from 'next/link';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { theme, toggleTheme } = useApp();

  return (
    <nav className="navbar">
      <div className="nav-logo">ScientistGallery</div>

      <ul className="nav-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}