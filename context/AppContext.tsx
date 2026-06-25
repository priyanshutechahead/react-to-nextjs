'use client';
import { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
interface AppContextType {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    professionFilter: string;
    setProfessionFilter: (filter: string) => void;
    favorites: number[];
    toggleFavorite: (id: number) => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}
const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');
    const [professionFilter, setProfessionFilter] =
        useLocalStorage('professionFilter', 'All');
    const [favorites, setFavorites] = useLocalStorage('favorites', []);
    const [theme, setTheme] = useLocalStorage('theme', 'light');

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

    };

    const toggleFavorite = (id: number) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
        );
    };

    return (
        < AppContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                professionFilter,
                setProfessionFilter,
                favorites,
                toggleFavorite,
                theme,
                toggleTheme,

            }
            }
        >
            {children}
        </AppContext.Provider >
    );
}

export function useApp() {
    const context = useContext(AppContext);
    if (!context) throw new Error('useApp must be used within an AppProvider');
    return context;

}