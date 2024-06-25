import React, { useEffect, useState } from "react";
import "./App.css";
import Box from "./components/Box/Box";
import Header from "./components/Header/Header";
import { getUserRegion, getWeatherDataByRegion } from "./api/api";
import CurrentWeather from "./components/CurentWeather/CurentWeather";
import DaysWeatherForecast from "./components/DaysWeatherForecast/DaysWeatherForecast";
function App() {
  const [userRegion, setUserRegion] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const region = await getUserRegion();
      setUserRegion(region);

      if (region && region.city && region.country) {
        const weather = await getWeatherDataByRegion(
          region.city,
          region.country
        );
        setWeatherData(weather);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header>
        <b>Weather Forecast</b>
      </Header>
      <div className="AppContent">
        {userRegion && weatherData ? (
          <>
            <CurrentWeather  weatherData={weatherData}/>
            <Box><DaysWeatherForecast weatherData={weatherData}/></Box>
            <Box alignItems="center">
              <h3>
                {weatherData.description}
              </h3>
            </Box>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
