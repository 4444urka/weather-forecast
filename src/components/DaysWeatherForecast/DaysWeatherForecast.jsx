import React from "react";
import "./styles.css";

const DaysWeatherForecast = ({ weatherData }) => {
  const getMonthByNumber = (number) => {
    switch (number) {
      case "01":
        return "January";
      case "02":
        return "February";
      case "03":
        return "March";
      case "04":
        return "April";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "August";
      case "09":
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
      default:
        return "";
    }
  };

  const forecastData = [
    {
      day:
        weatherData.days[0].datetime.split("-")[2] +
        " " +
        getMonthByNumber(weatherData.days[0].datetime.split("-")[1]),
      temperature: weatherData.days[0].temp,
      condition: weatherData.days[0].icon,
    },
    {
      day:
      weatherData.days[1].datetime.split("-")[2] +
      " " +
      getMonthByNumber(weatherData.days[1].datetime.split("-")[1]),
      temperature: weatherData.days[1].temp,
      condition: weatherData.days[1].icon,
    },
    {
      day:
        weatherData.days[2].datetime.split("-")[2] +
        " " +
        getMonthByNumber(weatherData.days[2].datetime.split("-")[1]),
      temperature: weatherData.days[2].temp,
      condition: weatherData.days[2].icon,
    },
    {
      day:
        weatherData.days[3].datetime.split("-")[2] +
        " " +
        getMonthByNumber(weatherData.days[3].datetime.split("-")[1]),
      temperature: weatherData.days[3].temp,
      condition: weatherData.days[3].icon,
    },
    {
      day:
        weatherData.days[4].datetime.split("-")[2] +
        " " +
        getMonthByNumber(weatherData.days[4].datetime.split("-")[1]),
      temperature: weatherData.days[4].temp,
      condition: weatherData.days[4].icon,
    },
  ];

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "clear-day":
        return "https://cdn-icons-png.flaticon.com/512/606/606795.png";
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

  return (
    <div>
      <h3>Week Forecast</h3>
      <div className="forecast-container">
        {forecastData.map((forecast, index) => (
          <div key={index} className="forecast-day">
            <h4>{forecast.day}</h4>
            <p>{Math.round((forecast.temperature - 32) * (5 / 9))}°С</p>
            <img
              src={getWeatherIcon(forecast.condition)}
              alt={forecast.condition}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaysWeatherForecast;
