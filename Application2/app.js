const { startDataPolling } = require("./dataProcessor");
const config = require("./config");

startDataPolling();
console.log(
  "Weather Monitoring System started. Fetching data every 5 minutes ..."
);
