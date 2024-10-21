# Real-Time Weather Monitoring and Data Processing System

## Overview

This project is a **Real-Time Data Processing System** designed to monitor weather conditions in six major metro cities of India using the **OpenWeatherMap API**. It continuously retrieves weather data, processes it to generate daily summaries (average temperature, maximum temperature, minimum temperature, and dominant weather condition), and triggers alerts if specific user-defined thresholds are breached. The system is designed for real-time data processing, alerting, and visualizing daily weather trends.

## Features

- **Real-Time Data Retrieval**: Continuously fetches weather data from the OpenWeatherMap API for six cities (Delhi, Mumbai, Chennai, Bangalore, Kolkata, Hyderabad) at a configurable interval.
- **Daily Rollups & Aggregates**:
  - Calculates daily average temperature, max/min temperatures, and dominant weather conditions.
  - Stores daily summaries for historical analysis.
- **Alerts**:
  - Triggers alerts if certain thresholds are breached, such as temperature exceeding a predefined value for consecutive updates.
  - Customizable alert thresholds.
- **Visualization**:
  - Displays daily summaries and alerts through console logs (can be extended to visual dashboards).

## Design Choices

### 1. **Technology Stack**:

- **Node.js**: Chosen for its event-driven, non-blocking I/O, which is ideal for real-time data processing.
- **OpenWeatherMap API**: Provides reliable and detailed weather data, which is easy to integrate with external services.
- **Axios**: For making HTTP requests to the OpenWeatherMap API due to its ease of use and flexibility.
- **Docker**: To containerize the application for easy deployment and management in any environment.

### 2. **Architecture**:

- **Modular Design**: The project is divided into distinct modules:
  - **Data Fetching Module**: Handles API requests to fetch weather data at regular intervals.
  - **Processing Module**: Responsible for calculating rollups (average, max, min) and aggregating data for daily summaries.
  - **Alerting Module**: Continuously monitors incoming data and triggers alerts if configured thresholds are exceeded.
  - **Database Layer**: For storing daily summaries (in-memory or persistent storage like MongoDB can be integrated).

### 3. **Polling Interval**:

- Configured to poll weather data every 5 minutes (configurable via `config.js`). This interval can be adjusted based on the need for real-time precision.

### 4. **Error Handling & Retry Mechanism**:

- Error handling is implemented to log failed API calls and avoid application crashes due to transient network issues.

## System Requirements

### 1. **Dependencies**

- **Node.js**: v12 or above
- **NPM**: Node Package Manager
- **Axios**: For handling HTTP requests.
- **Docker**: Optional, for containerization.
- **MongoDB**: Optional, for persistent storage of daily summaries.

### 2. **Environment Setup**

- **OpenWeatherMap API Key**: You need to sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api).
- Configure the API key in the `config.js` file:
  ```javascript
  // config.js
  module.exports = {
    OPENWEATHERMAP_API_KEY: "your_api_key_here",
    POLLING_INTERVAL: 300000, // 5 minutes in milliseconds
    ALERT_THRESHOLD: {
      temperature: 35, // degrees Celsius
      consecutiveUpdates: 2, // number of consecutive updates to trigger an alert
    },
    LOCATIONS: [
      "Delhi",
      "Mumbai",
      "Chennai",
      "Bangalore",
      "Kolkata",
      "Hyderabad",
    ],
  };
  ```

### 3. **Installation Instructions**

1.  **Clone the Repository**:

        ```bash
        git clone <repository_url>
        cd weather-monitoring-system
        ```

    2.**Install Dependencies**:

                ```bash
                npm install axios

3.**Configure API Key**:

        Replace your_api_key_here in config.js with your OpenWeatherMap API key.

4.**Run the Application**:

    node app.js

### 4.**License**:

### **Explanation of the README Structure**:

1. **Overview**: Provides a summary of the project’s functionality and the cities it monitors.
2. **Features**: Lists the key features, such as real-time data retrieval, daily summaries, and alerting.
3. **Design Choices**: Explains the technologies chosen (Node.js, Axios, Docker) and the modular design of the system.
4. **System Requirements**: Lists the necessary dependencies and instructions to set up the environment.
5. **Installation Instructions**: Step-by-step guide to cloning the repository, installing dependencies, and running the app.
6. **Docker Setup**: Explains how to containerize the app using Docker, from creating a Dockerfile to running the container.
7. **Testing**: Describes how to test key functionalities of the system, like temperature conversion and alert triggering.
8. **Future Enhancements**: Lists potential future features like database integration, additional weather parameters, and forecasting.
9. **License**: Indicates the licensing of the project.

This README is structured to guide users through setup, execution, and future development options.
