import React from "react";

export default function WeatherDisplay({ data }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", display: "inline-block" }}>
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Condition: {data.weather[0].main}</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
}