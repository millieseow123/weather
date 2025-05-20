import CONSTANTS from '@/constants/text';
import { Box, Skeleton, Typography } from '@mui/material';

export default function WeatherCardSkeleton() {
    return (
        <Box
            sx={{
                backgroundColor: 'history.bg',
                borderRadius: { xs: 4, sm: 5 },
                p: {xs: 2, sm: 3},
                width: '100%',
                minHeight: 180,
            }}
        >
            <Typography variant="subtitle2" color="text.secondary" mb={1}>
                {CONSTANTS.WEATHER.TITLE}
            </Typography>
            <Skeleton variant="text" width={60} height={60} />
            <Skeleton variant="text" width={120} />
            <Skeleton variant="text" width="80%" />
        </Box>
    );
}
