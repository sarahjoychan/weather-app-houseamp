import { WeatherData } from "../types/api";

export const doFetchWeather = async (): Promise<WeatherData | null> => {
  try {
    const response = await fetch("http://localhost:8080/weather");
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log("Error fetching weather data: ", error);
    return null;
  }
};
