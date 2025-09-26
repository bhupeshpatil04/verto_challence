# Weather App 🌤️

A simple React-based Weather App that fetches current weather details for any city using the OpenWeatherMap API.

## Features
- Search by city name.
- Display temperature, condition, and humidity.
- Loading indicator + error messages.
- Saves last searched city in localStorage.

## Setup Instructions

1. Clone the repo or unzip the project.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Replace `YOUR_OPENWEATHERMAP_API_KEY` in `App.jsx` with your API key from [OpenWeatherMap](https://openweathermap.org/api).
4. Start the app:
   ```bash
   npm run dev
   ```

## Project Structure
- `src/components/SearchBar.jsx`: Input for city search.
- `src/components/WeatherDisplay.jsx`: Displays weather details.
- `src/App.jsx`: Main app logic.

## Bonus
- Stores last searched city in browser localStorage.

---
Built for ASE Challenge 🚀
