'use client';

import { useEffect, useState } from 'react';
import { Box, IconButton, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Zoom in={visible}>
            <Box
                sx={{
                    position: 'fixed',
                    bottom: { xs: 80, sm: 16 },
                    right: 16,
                    zIndex: 999,
                }}
            >
                <IconButton
                    onClick={handleClick}
                    size="large"
                    sx={{
                        backgroundColor: 'scroll.bg',
                        color: 'scroll.icon',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        '&:hover': {
                            backgroundColor: 'scroll.hover',
                        },
                    }}
                >
                    <KeyboardArrowUpIcon />
                </IconButton>
            </Box>
        </Zoom>
    );
}
