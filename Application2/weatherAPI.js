const axios = require("axios");
const config = require("./config");

async function getWeatherData(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${config.OPENWEATHERMAP_API_KEY}&units=metric`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching weather data for ${location}:`,
      error.message
    );
    throw error;
  }
}

module.exports = { getWeatherData };
