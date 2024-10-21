const dailySummaries = {};

function processDailySummary(location, weatherData) {
  const date = new Date(weatherData.dt).toISOString().split("T")[0];
  if (!dailySummaries[date]) {
    dailySummaries[date] = {
      location,
      totalTemp: 0,
      maxTemp: -Infinity,
      minTemp: Infinity,
      count: 0,
      dominantWeather: {},
    };
  }

  dailySummaries[date].totalTemp += weatherData.temp;
  dailySummaries[date].count += 1;
  dailySummaries[date].maxTemp = Math.max(
    dailySummaries[date].maxTemp,
    weatherData.temp
  );
  dailySummaries[date].minTemp = Math.min(
    dailySummaries[date].minTemp,
    weatherData.temp
  );

  const weatherCondition = weatherData.main;
  dailySummaries[date].dominantWeather[weatherCondition] =
    (dailySummaries[date].dominantWeather[weatherCondition] || 0) + 1;

  let maxCount = 0;
  let dominantWeatherCondition = "";
  for (const condition in dailySummaries[date].dominantWeather) {
    if (dailySummaries[date].dominantWeather[condition] > maxCount) {
      maxCount = dailySummaries[date].dominantWeather[condition];
      dominantWeatherCondition = condition;
    }
  }
  dailySummaries[date].dominantWeather = dominantWeatherCondition;

  console.log(
    `Daily summary for ${location} on ${date}:`,
    dailySummaries[date]
  );
}

module.exports = { processDailySummary, dailySummaries };
