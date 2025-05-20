import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useThemeMode } from '@/context/themeProviderWrapper';

export default function ThemeSwitcherMobile() {
    const { mode, toggleTheme } = useThemeMode();

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
                zIndex: 999,
                display: { xs: 'flex', sm: 'none' },
            }}
        >
            <IconButton
                onClick={toggleTheme}
                size="large"
                sx={{
                    backgroundColor: 'mobileThemeButton.bg',
                    color: 'mobileThemeButton.icon',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    '&:hover': {
                        backgroundColor: '#6d28d9',
                    },
                }}
            >
                {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
        </Box>
    );
}
