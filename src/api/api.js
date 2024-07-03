export async function getWeatherDataByRegion(city, country) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}%2C${country}?unitGroup=metric&key=STGEFRRCZ458YXSLWUUGVF6V9`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  }
  
  export async function getUserRegion() {
    try {
      const response = await fetch("https://ipinfo.io/json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching IP geolocation data:", error);
      return null;
    }
  }