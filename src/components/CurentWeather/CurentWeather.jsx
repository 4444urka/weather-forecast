import Box from "../Box/Box";
import "./styles.css";
import getWeatherIcon from "../../functions/getWeatherIcon";

const CurrentWeather = ({ weatherData }) => {

  const weatherIcon = getWeatherIcon(weatherData.currentConditions.icon);

  return (
    <Box>
      <div className="weather-container">
        <div className="weather-info">
          <h3>{weatherData.address.split(",")[0]}</h3>
          <h2>{weatherData.currentConditions.temp}°С</h2>
          <p>
            <b>Feels like:</b> {weatherData.currentConditions.feelslike}°С
          </p>
        </div>
        <div className="weather-icon">
          <img src={weatherIcon} width="100" height="100" alt={weatherData.currentConditions.condition} />
        </div>
      </div>
    </Box>
  );
};

export default CurrentWeather;