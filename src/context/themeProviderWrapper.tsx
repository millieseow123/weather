'use client';

import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from '@/theme/theme';

export const ThemeModeContext = createContext({
    mode: 'light',
    toggleTheme: () => { },
});

export const useThemeMode = () => useContext(ThemeModeContext);

export default function ThemeProviderWrapper({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const theme = useMemo(() => getTheme(mode), [mode]);

    const toggleTheme = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'));

    return (
        <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
}
