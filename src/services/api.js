import axios from "axios";

const api_key = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export async function GET_WEATHER({latitude, longitude}) {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&exclude=minutely&appid=${api_key}`);
    return response;
}