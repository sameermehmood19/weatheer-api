import express from "express";
import cors from "cors";

import { getCoordinates } from "./services/geocode.js";
import { getWeather } from "./services/weather.js";
import { weatherCodes } from "./utils/weatherCodes.js";

const app = express();
app.use(cors());

const PORT = 3000;

/**
 * 1. Search locations (multiple results)
 */
app.get("/search/:city", async (req, res) => {
  const city = req.params.city;

  const results = await getCoordinates(city);

  if (!results) {
    return res.status(404).json({ error: "No locations found" });
  }

  const formatted = results.map((loc) => ({
    name: `${loc.name}, ${loc.country}`,
    latitude: loc.latitude,
    longitude: loc.longitude
  }));

  res.json({ results: formatted });
});

/**
 * 2. Get weather using lat/lon
 */
app.get("/weather", async (req, res) => {
  const { lat, lon, name } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: "lat and lon required" });
  }

  const current = await getWeather(lat, lon);

  res.json({
    location: name || "Unknown",
    temperature: current.temperature_2m,
    wind: current.wind_speed_10m,
    humidity: current.relative_humidity_2m,
    condition: weatherCodes[current.weather_code] || "Unknown"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});