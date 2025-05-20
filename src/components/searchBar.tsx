'use client';

import { useState } from 'react';
import { Box, TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import CONSTANTS from '@/constants/text';

interface SearchFormProps {
    onSearch: (country: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
    const [country, setCountry] = useState('');

    const handleSearch = () => {
        if (!country) return;
        onSearch(country);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSearch();
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                maxWidth: 600,
                mx: 'auto',
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    backgroundColor: 'search.bar',
                    borderRadius: { xs: 3, sm: 4 },
                    px: 3,
                    pb: 1.5,
                    height: 50,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <TextField
                    variant="standard"
                    label={CONSTANTS.SEARCH.PLACEHOLDER}
                    value={country}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setCountry(e.target.value)}
                    fullWidth
                    slotProps={{
                        input: {
                            disableUnderline: true, endAdornment: country && (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setCountry('')}
                                        edge="end"
                                        sx={{ color: 'white' }}
                                    >
                                        <ClearIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                        inputLabel: {
                            sx: {
                                color: 'search.placeholder',
                                transition: 'all 0.2s ease',
                                '&.MuiInputLabel-shrink': {
                                    paddingTop: '10px',
                                },
                                '&.Mui-focused': {
                                    color: 'search.placeholder',
                                },
                            },
                        },
                    }}
                    sx={{
                        label: { color: 'search.placeholder' },
                    }}
                />
            </Box>

            <Box
                sx={{
                    backgroundColor: 'search.button',
                    borderRadius: { xs: 3, sm: 4 },
                    ml: 1.5,
                    p: 1.2,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                        backgroundColor: '#743dbc',
                    },
                }}
                onClick={handleSearch}
            >
                <SearchIcon sx={{ color: 'white' }} />
            </Box>
        </Box>

    );
}
