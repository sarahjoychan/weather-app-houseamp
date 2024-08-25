# Weather Forecast App

This is a simple Weather Forecast Application that displays current weather data. The application consists of a React frontend and a Spring Boot backend. The backend serves mock weather data, which the frontend fetches and displays on the home page.

## Running the Application

1. Navigate to the root of the project directory.

2. Install the required dependencies: `npm install`

3. Start the React application: `npm start`

4. Navigate to the "spring" directory: `cd spring`

5. Run `./mvnw spring-boot:run`
//This runs the SpringBoot backend using a Maven wrapper.

6. Once the frontend react app and spring boot backend are running, you can view the application on `http://localhost:3000`
//The React frontend will fetch data from the SpringBoot backend and display it in the center of the screen.