'use client';

import { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SearchBar from '@/components/searchBar';
import WeatherCard from '@/components/weatherCard';
import SearchHistory from '@/components/searchHistory';
import { fetchWeatherByCity } from '@/services/weatherApi';
import { getCurrentLocation } from '@/utils/getLocation';
import { fetchWeatherByCoords } from '@/services/weatherApi';
import { HistoryItem } from '@/hooks/useSearchHistory';
import WeatherCardSkeleton from '@/components/weatherCardSkeleton';
import { format } from 'date-fns';
import { useThemeMode } from '@/context/themeProviderWrapper';
import ThemeSwitcherDesktop from '@/components/themeSwitcherDesktop';
import sun from '@/assets/sun.png'
import ThemeSwitcherMobile from '@/components/themeSwitcherMobile';
import ScrollToTopButton from '@/components/scrollToTopButton';
import CONSTANTS from '@/constants/text';
import { formatTimestamp } from '@/utils/formatTimestamp';

export default function HomePage() {
    const { mode } = useThemeMode();
    const background = mode === 'light' ? '/bg-light.png' : '/bg-dark.png';
    const [weatherData, setWeatherData] = useState(null);
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [time, setTime] = useState('');
    const [searchError, setSearchError] = useState('');
    const [loading, setLoading] = useState(true);
    const [loadingHistory, setLoadingHistory] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const fetchCurrentLocationWeather = async () => {
                const cached = localStorage.getItem(CONSTANTS.WEATHER.CACHED_WEATHER);
                if (cached) {
                    setWeatherData(JSON.parse(cached));
                    return;
                }
                setLoading(true);
                try {
                    const { lat, lon } = await getCurrentLocation();
                    const data = await fetchWeatherByCoords(lat, lon);
                    setWeatherData(data);
                } catch (err) {
                    console.error('Could not get location or weather:', err);
                } finally {
                    setLoading(false);
                }
            };

            fetchCurrentLocationWeather();
        }
    }, []);

    useEffect(() => {
        setLoadingHistory(true);
        const stored = localStorage.getItem(CONSTANTS.WEATHER.WEATHER_SEARCH_HISTORY);
        if (stored) setHistory(JSON.parse(stored));
        setLoadingHistory(false);
    }, []);

    const addHistory = (item: HistoryItem) => {
        const updated = [item, ...history];
        setHistory(updated);
        localStorage.setItem(CONSTANTS.WEATHER.WEATHER_SEARCH_HISTORY, JSON.stringify(updated));
    };

    const deleteHistory = (index: number) => {
        const updated = history.filter((_, i) => i !== index);
        setHistory(updated);
        localStorage.setItem('weatherSearchHistory', JSON.stringify(updated));
    };

    const formattedTimestamp = formatTimestamp();
    const handleSearch = async (input: string) => {
        try {
            const data = await fetchWeatherByCity(input);

            if (!data || !data.city || !data.country) {
                setSearchError(CONSTANTS.SEARCH.ERROR.NOT_FOUND);
                return;
            }
            setSearchError('');

            setWeatherData(data);
            if (data?.city && data?.country) {
                addHistory({
                    city: data.city,
                    country: data.country,
                    timestamp: formattedTimestamp,
                });
            }
        } catch (err) {
            setSearchError(CONSTANTS.SEARCH.ERROR.GENERIC);
        }
    };

    useEffect(() => {
        setTime(new Date().toLocaleString());
    }, []);

    const layoutBoxStyles = {
        maxWidth: 600,
        mx: 'auto',
    };


    return (
        <Box
            sx={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '100vh',
                px: 2,
                py: 4,
            }}
        >

            <Box
                sx={{
                    pb: 10,
                    ...layoutBoxStyles,
                }}
            >
                <SearchBar onSearch={handleSearch} />
                <Box sx={{ position: 'absolute', top: 24, right: 24 }}>
                    <ThemeSwitcherDesktop />
                </Box>

                {searchError && (
                    <Box
                        sx={(theme) => ({
                            mt: 2,
                            px: 2,
                            py: 1.5,
                            borderRadius: 2,
                            backgroundColor: theme.palette.mode === 'light'
                                ? 'rgba(255, 0, 0, 0.05)'
                                : 'rgba(255, 255, 255, 0.03)',
                            border: `1px solid ${theme.palette.error.main}`,
                            color: theme.palette.error.main,
                            fontWeight: 500,
                            backdropFilter: 'blur(4px)',
                            fontSize: '0.9rem',
                        })}
                    >
                        {CONSTANTS.SEARCH.ERROR.NOT_FOUND}
                    </Box>

                )}

            </Box>

            <Grid container spacing={3} direction="column" sx={{
                background: theme => (theme.palette as any).history.container,
                borderRadius: {
                    xs: 4,
                    sm: 5
                },
                px: { xs: 3, sm: 4 },
                py: 3,
                border: '1px solid',
                position: 'relative',
                borderColor: 'custom.containerBorder',
                ...layoutBoxStyles,
            }}>
                <Grid>
                    {loading ? (
                        <WeatherCardSkeleton />
                    ) : (
                        <>
                            <Box
                                component="img"
                                src={sun.src}
                                alt="Weather illustration"
                                sx={{
                                    width: { xs: 180, sm: 250 },
                                    height: 'auto',
                                    position: 'absolute',
                                    top: { xs: '-60px', sm: '-80px' },
                                    right: { xs: '10px', sm: '20px' },
                                    zIndex: 1,
                                }} />
                            <WeatherCard data={weatherData} />
                        </>
                    )}
                </Grid>

                <Grid>
                    <SearchHistory history={history}
                        onDelete={deleteHistory}
                        onSelect={handleSearch}
                        loading={loadingHistory}
                    />
                </Grid>
            </Grid>

            <ScrollToTopButton />
            <ThemeSwitcherMobile />
        </Box>
    );
}
