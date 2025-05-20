import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') =>
    createTheme({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    primary: {
                        main: '#FFF',
                    },
                    text: {
                        primary: '#000000',
                        secondary: '#6d626a',
                    },
                    search: {
                        bar: 'rgba(255, 255, 255, 0.1)',
                        button: '#753DBC',
                        placeholder: '#696969',
                    },
                    history: {
                        container: 'rgba(255, 255, 255, 0.3)',
                        bg: 'rgba(255, 255, 255, 0.1)',
                        searchCard: 'rgba(239, 227, 247, 0.84)',
                        buttonBg: '#FFF',
                        buttonBorder: 'transparent',
                        hover: '#EDE9FE',
                    },
                    scroll: {
                        bg: 'rgba(255, 255, 255, 0.25)',
                        icon: '#5B21B6',
                        hover: 'rgba(255, 255, 255, 0.35)',

                    },
                    mobileThemeButton: {
                        bg: '#6D28D9',
                        icon: '#FFF',
                        border: 'rgba(255, 255, 255, 0.35)',
                    },
                    custom: {
                        temperature: '#753DBC',
                        timestamp: '#000000',
                        containerBorder: 'rgba(255,255,255,0.3)',
                    }
                }
                : {
                    primary: {
                        main: '#9B6AF2',
                    },
                    text: {
                        primary: '#FFFFFF',
                        secondary: '#FFFFFF',
                    },
                    search: {
                        bar: '#412D73',
                        button: '#2A1150',
                        placeholder: '#FFF',
                    },
                    history: {
                        container: 'rgba(65, 45, 115, 0.7)',
                        bg: 'rgba(63, 45, 112, 0.9)',
                        searchCard: 'rgba(47, 36, 74, 0.84)',
                        buttonBorder: 'rgba(255, 255, 255, 0.3)',
                        buttonIcon: 'rgba(255, 255, 255, 0.6)',
                        buttonBg: 'transparent',

                    },
                    scroll: {
                        bg: 'rgba(255, 255, 255, 0.12)',
                        icon: '#FFF',
                        hover: 'rgba(255, 255, 255, 0.2)',
                    },
                    mobileThemeButton: {
                        bg: 'rgba(255, 255, 255, 0.15)',
                        icon: '#FFF',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                    },
                    custom: {
                        temperature: '#FFF',
                        timestamp: 'rgba(255, 255, 255, 0.6)',
                        containerBorder: 'transparent',
                    }
                }),
        },
    });
