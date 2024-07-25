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

export default getWeatherIcon