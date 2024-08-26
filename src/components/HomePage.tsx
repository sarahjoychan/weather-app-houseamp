import { useEffect, useState } from "react";
import { WeatherData } from "../types/api";
import { doFetchWeather } from "../api/weatherApi";

const HomePage = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    doFetchWeather().then((data) => setWeatherData(data));
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Current Weather</h1>
      <p>Temperature: {weatherData.temperature}</p>
      <p>Humidity: {weatherData.humidity}</p>
      <p>Condition: {weatherData.condition}</p>
    </div>
  );
};

export default HomePage;
