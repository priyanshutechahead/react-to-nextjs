import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(initialValue);
    // Load from local storage only on the client
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(key);
            if (saved !== null) {
                setValue(JSON.parse(saved));
            }
        }
    }, [key]);

    const setLocalStorageValue = (val: T | ((prev: T) => T)) => {
        const newValue = val instanceof Function ? val(value) : val;
        setValue(newValue);
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(newValue));
        }
    };

    return [value, setLocalStorageValue] as const;
}