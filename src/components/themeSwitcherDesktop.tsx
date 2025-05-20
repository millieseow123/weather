import { useThemeMode } from '@/context/themeProviderWrapper';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function ThemeSwitcherDesktop() {
    const { mode, toggleTheme } = useThemeMode();

    return (
        <IconButton onClick={toggleTheme} sx={{
            color: 'white', display: {
                xs: 'none', sm: 'flex'
            },
        }}>
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
    );
}
