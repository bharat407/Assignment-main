const dailySummaries = require("./database").dailySummaries;

function displayDailySummaries() {
  console.log("Daily Weather Summaries:", dailySummaries);
}

module.exports = { displayDailySummaries };
