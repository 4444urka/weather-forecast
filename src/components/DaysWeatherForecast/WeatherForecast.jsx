import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import getWeatherIcon from "../../functions/getWeatherIcon";

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
