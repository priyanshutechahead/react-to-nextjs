'use client';

import { useEffect, ReactNode } from 'react';
import { AppProvider, useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import './globals.css';

function MainLayout({ children }: { children: ReactNode }) {
  const { theme } = useApp();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">{children}</main>
      <footer className="footer">
        <p>© 2026 ScientistGallery Project</p>
      </footer>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}