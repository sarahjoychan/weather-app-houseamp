import { useEffect, useState } from "react";

interface WeatherData {
  temperature: string;
  humidity: string;
  condition: string;
}

const HomePage = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
      fetch("http://localhost:8080/weather")
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.log("error fetching weather data: ", error))
  }, [])

  if (!weatherData) {
    return <div>Loading...</div>
  }
  
  return (
    <div>
      <h1>Current Weather</h1>
      <p>Temperature: {weatherData.temperature}</p>
      <p>Humidity: {weatherData.humidity}</p>
      <p>Condition: {weatherData.condition}</p>
    </div>
  );

}

export default HomePage;