import { useEffect, useState } from "react";

interface WeatherData {
  temp: string;
  humidity: string;
  conditions: string;
}

const HomePage = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
      fetch("http://localhost:8080/weather")
      .then(response => response.json())
      .then(data => setWeatherData(data))
  }, [])

  if (!weatherData) {
    return <div>Loading...</div>
  }
  
  return (
    <div></div>
  );

}

export default HomePage;