import { useEffect, useState } from 'react';

export type HistoryItem = {
    city: string;
    country: string;
    timestamp: string;
};

const STORAGE_KEY = 'weatherSearchHistory';

export const useSearchHistory = () => {
    const [history, setHistory] = useState<HistoryItem[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) setHistory(JSON.parse(stored));
    }, []);

    const saveToStorage = (items: HistoryItem[]) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    };

    const addHistory = (item: HistoryItem) => {
        const updated = [item, ...history];
        setHistory(updated);
        saveToStorage(updated);
    };

    const deleteHistory = (index: number) => {
        const updated = history.filter((_, i) => i !== index);
        setHistory(updated);
        saveToStorage(updated);
    };

    return { history, addHistory, deleteHistory };
};
