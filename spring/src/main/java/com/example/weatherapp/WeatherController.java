package com.example.weatherapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherController {

    @GetMapping("/weather")
    public WeatherData getWeather() {
        return new WeatherData("72°F", "45%", "Sunny");
    }

    static class WeatherData {
        private String temperature;
        private String humidity;
        private String condition;

        public WeatherData(String temperature, String humidity, String condition) {
            this.temperature = temperature;
            this.humidity = humidity;
            this.condition = condition;
        }

        public String getTemperature() {
            return temperature;
        }

        public String getHumidity() {
            return humidity;
        }

        public String getCondition() {
            return condition;
        }
    }
}