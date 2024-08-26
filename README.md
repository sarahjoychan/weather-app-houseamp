# Weather Forecast App

This is a simple Weather Forecast Application that displays current weather data. The app includes a React frontend and a Spring Boot backend. The backend serves mock weather data, which the frontend fetches and displays on the home page.

## Overview

The Weather Forecast App is designed to demonstrate the integration between a React frontend and a Spring Boot backend. The backend simulates weather data, which the frontend consumes and presents to the user in a clean interface.

## Prerequisites
Before Runing the applciation, install the following:
- Node.js
- npm
- Java
- Maven

## Running the Application

1. Clone the repository and navigate to the project root.

2. Install the required dependencies: `npm install` 

3. Start the React application: `npm start`

4. Navigate to the "spring" directory: `cd spring`

5. Run the Spring Boot backend: `./mvnw spring-boot:run`

6. **View the application:** Once both the React frontend and Spring Boot backend are running, open your browser and navigate to http://localhost:3000. The app will fetch data from the backend and display it on the home page.
