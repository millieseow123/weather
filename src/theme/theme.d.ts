import '@mui/material/styles';
import { PaletteOptions, Palette } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        search: {
            bar: string;
            button: string;
            placeholder: string;
        };
        history: {
            container: string;
            bg: string;
            searchCard: string;
            buttonBg: string;
            buttonBorder: string;
            buttonIcon?: string;
        };
        scroll: {
            bg: string;
            icon: string;
            hover: string;
        };
        mobileThemeButton: {
            bg: string;
            icon: string;
            border: string;
        };
        custom: {
            temperature: string;
            timestamp: string;
            containerBorder: string;
        };
    }

    interface PaletteOptions {
        search?: {
            bar: string;
            button: string;
            placeholder: string;
        };
        history?: {
            container: string;
            bg: string;
            searchCard: string;
            buttonBg: string;
            buttonBorder: string;
            buttonIcon?: string;
        };
        scroll?: {
            bg: string;
            icon: string;
            hover: string;
        };
        mobileThemeButton?: {
            bg: string;
            icon: string;
            border: string;
        };
        custom?: {
            temperature: string;
            timestamp: string;
            containerBorder: string;
        };
    }
}
