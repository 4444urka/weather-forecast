import Box from "../Box/Box";
import "./styles.css";

const CurrentWeather = ({ weatherData }) => {
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "clear-day":
        return "https://cdn-icons-png.flaticon.com/512/606/606795.png";
      case "clear-night":
        return "https://cdn-icons-png.flaticon.com/512/1163/1163594.png"
      case "cloudy":
        return "https://cdn-icons-png.flaticon.com/512/2930/2930014.png";
      case "partly-cloudy-day":
        return "https://cdn-icons-png.flaticon.com/512/2932/2932445.png";
      case "rain":
        return "https://cdn-icons-png.flaticon.com/512/3313/3313888.png";
      case "snow":
        return "https://cdn-icons-png.flaticon.com/512/2529/2529995.png";
      default:
        return "https://cdn-icons-png.flaticon.com/512/2932/2932445.png";
    }
  };

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