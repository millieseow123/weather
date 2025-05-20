'use client';

import CONSTANTS from '@/constants/text';
import { formatTimestamp } from '@/utils/formatTimestamp';
import { Box, Typography, Grid } from '@mui/material';
import { format } from 'date-fns';

interface WeatherCardProps {
    data: {
        city: string;
        country: string;
        weather: { main: string; description: string; icon: string }[];
        main: { temp: number; temp_max: number; temp_min: number; humidity: number };
        dt: number;
    } | null;
}

export default function WeatherCard({ data }: WeatherCardProps) {
    if (!data) {
        return <Typography align="center">{CONSTANTS.WEATHER.NO_DATA}</Typography>;
    }

    const { city, country, weather, main, dt } = data;
    const date = formatTimestamp();    
    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Grid
                    container
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="flex-start"
                    mt={1}
                >
                    <Grid>
                        <Box>
                            <Typography variant="subtitle2" color="text.primary" fontWeight={500}>
                                {CONSTANTS.WEATHER.TITLE}
                            </Typography>

                            <Typography
                                variant="h1"
                                fontWeight={700}
                                lineHeight={1}
                                sx={{
                                    color: 'custom.temperature',
                                }}
                            >
                                {Math.round(main.temp)}°
                            </Typography>

                            <Typography fontSize="0.9rem" color="text.primary" mt={-1}>
                                {CONSTANTS.WEATHER.HIGH} {Math.round(main.temp_max)}° {CONSTANTS.WEATHER.LOW} {Math.round(main.temp_min)}°
                            </Typography>

                            <Typography
                                fontSize="0.9rem"
                                color="text.secondary"
                                fontWeight={700}
                                mt={0.5}
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                }}
                            >
                                {city}, {country}
                            </Typography>
                        </Box>
                    </Grid>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            justifyContent: 'space-between',
                            alignItems: { xs: 'flex-end', sm: 'center' },
                            textAlign: { xs: 'right', sm: 'left' },
                            gap: { xs: 0.3, sm: 2 },
                            mt: { xs: 10, sm: 0 },
                            width: { xs: 'auto', sm: '100%' },        
                        }}
                    >
                        <Typography
                            fontSize="0.9rem"
                            color="text.secondary"
                            fontWeight={700}
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                            }}
                        >
                            {city}, {country}
                        </Typography>

                        <Typography
                            fontSize="0.9rem"
                            color="text.secondary"
                            sx={{
                                order: { xs: 3, sm: 1 },
                            }}
                        >
                            {date}
                        </Typography>

                        <Typography
                            fontSize="0.9rem"
                            color="text.secondary"
                            sx={{
                                order: { xs: 2, sm: 2 },
                            }}
                        >
                            {CONSTANTS.WEATHER.HUMIDITY} {main.humidity}%
                        </Typography>

                        <Typography
                            fontSize="0.9rem"
                            color="text.secondary"
                            sx={{
                                order: { xs: 1, sm: 3 },
                            }}
                        >
                            {weather[0].main}
                        </Typography>
                    </Box>
                </Grid>

            </Box>
        </Box >
    );
}
