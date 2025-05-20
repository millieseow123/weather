'use client';

import { CircularProgress, Box } from '@mui/material';

export default function LoadingSpinner() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4 }}>
            <CircularProgress size={40} sx={{ color: 'text.secondary' }} />
        </Box>
    );
}
