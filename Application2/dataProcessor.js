const { getWeatherData } = require("./weatherAPI");
const config = require("./config");
const { processDailySummary } = require("./database");
const { checkAlerts } = require("./alerts");

let weatherDataStore = {};
let alertTracker = {};

async function fetchWeatherData() {
  for (const location of config.LOCATIONS) {
    try {
      const data = await getWeatherData(location);
      const processedData = {
        main: data.weather[0].main,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        dt: data.dt * 1000,
      };
      weatherDataStore[location] = processedData;

      await processDailySummary(location, processedData);

      checkAlerts(processedData, location);
    } catch (error) {
      console.error(`Failed to process data for ${location}:`, error.message);
    }
  }
}

function startDataPolling() {
  setInterval(fetchWeatherData, config.POLLING_INTERVAL);
}

module.exports = { startDataPolling };
