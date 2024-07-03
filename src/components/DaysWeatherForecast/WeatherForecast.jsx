import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const DaysWeatherForecast = ({ weatherData, displayType, children }) => {
  const [displayCount, setDisplayCount] = useState(5);
  const containerRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const containerWidth = entry.contentRect.width;
        if (containerWidth < 600) {
          setDisplayCount(5);
        } else {
          setDisplayCount(8);
        }
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "clear-day":
        return "https://cdn-icons-png.flaticon.com/512/606/606795.png";
      case "cloudy":
        return "https://cdn-icons-png.flaticon.com/512/2930/2930014.png";
      case "clear-night":
        return "https://cdn-icons-png.flaticon.com/512/12934/12934564.png";
      case "partly-cloudy-night":
        return "https://cdn-icons-png.flaticon.com/512/2121/2121377.png";
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

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  };

  const formatTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").slice(0, 2);
    return `${hours}:${minutes}`;
  };

  return (
    <div ref={containerRef}>
      <h3>{children}</h3>
      <div className="forecast-container">
        {weatherData.slice(0, displayCount).map((forecast, index) => (
          <div key={index} className="forecast-day">
            <h4 style={{ fontSize: "13px" }}>
              {displayType === "date"
                ? formatDate(forecast.datetime)
                : formatTime(forecast.datetime)}
            </h4>
            <p>{forecast.temp}°С</p>
            <img src={getWeatherIcon(forecast.icon)} alt={forecast.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaysWeatherForecast;
