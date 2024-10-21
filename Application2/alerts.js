const config = require("./config");

let alertTracker = {};

function checkAlerts(weatherData, location) {
  const currentTemp = weatherData.temp;

  if (!alertTracker[location]) {
    alertTracker[location] = { count: 0 };
  }

  if (currentTemp > config.ALERT_THRESHOLD.temperature) {
    alertTracker[location].count += 1;
  } else {
    alertTracker[location].count = 0;
  }

  if (
    alertTracker[location].count >= config.ALERT_THRESHOLD.consecutiveUpdates
  ) {
    console.log(
      `ALERT! ${location} temperature exceeded ${config.ALERT_THRESHOLD.temperature}°C for ${config.ALERT_THRESHOLD.consecutiveUpdates} consecutive updates!`
    );
  }
}

module.exports = { checkAlerts };
