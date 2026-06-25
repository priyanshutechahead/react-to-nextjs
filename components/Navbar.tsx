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
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
      </ul>

      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}