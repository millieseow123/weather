import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

export const fetchWeatherByCoords = async (lat: number, lon: number) => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );

        return {
            city: response.data.name,
            country: response.data.sys.country,
            ...response.data,
        };
    } catch (error) {
        console.error('Error fetching weather by coordinates:', error);
        throw error;
    }
};

export const fetchWeatherByCity = async (country: string) => {
    if (!country) return null;

    try {
        const geoResponse = await axios.get(
            `https://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=1&appid=${API_KEY}`
        );
        
        const location = geoResponse.data[0];
        if (!location) throw new Error('Invalid location');

        const { lat, lon } = location;

        const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
          

        return {
            city: location.name,
            country: location.country,
            ...weatherResponse.data,
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

