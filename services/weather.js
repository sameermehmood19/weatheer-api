import fetch from "node-fetch";

export const getWeather = async (lat, lon) => {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,weather_code`
  );

  const data = await res.json();
  return data.current;
};