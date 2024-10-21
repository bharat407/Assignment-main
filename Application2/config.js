const config = {
  OPENWEATHERMAP_API_KEY: "9c97d5d3c6a6750eb59f1a57e7277c2b",
  LOCATIONS: [
    "Delhi",
    "Mumbai",
    "Chennai",
    "Bangalore",
    "Kolkata",
    "Hyderabad",
  ],
  POLLING_INTERVAL: 300000,
  ALERT_THRESHOLD: {
    temperature: 35,
    consecutiveUpdates: 2,
  },
};

module.exports = config;
