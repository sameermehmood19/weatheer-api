import fetch from "node-fetch";

export const getCoordinates = async (city) => {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
  );
  const data = await res.json();

  if (!data.results) return null;

  return data.results; // return all matches (important)
};