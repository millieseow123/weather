const CONSTANTS = {
    SEARCH: {
        PLACEHOLDER: 'Country',
        ERROR: {
            NOT_FOUND: 'City not found. Please try again.',
            GENERIC: 'Could not fetch weather data. Please try again.',
        },
    },

    WEATHER: {
        TITLE: "Today’s Weather",
        NO_DATA: 'No weather data yet.',
        HIGH: 'H:',
        LOW: 'L:',
        HUMIDITY: 'Humidity:',
        CACHED_WEATHER: 'cachedWeather',
        WEATHER_SEARCH_HISTORY: 'weatherSearchHistory',
    },

    HISTORY: {
        TITLE: 'Search History',
        EMPTY_STATE: 'No searches yet. Try typing a city name above!',
        LOADING: 'Loading history...',
        VIEW_TOOLTIP: 'View weather for this city',
        DELETE_TOOLTIP: 'Remove from history',
    },
};

export default CONSTANTS;
  