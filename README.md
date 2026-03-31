
# Weather API 🌦️

Simple Node.js & Express API that returns current weather for any city using **Open-Meteo**.

---

## Features

- Search locations by city name  
- Get weather using latitude & longitude  
- Returns JSON: temperature, wind speed, humidity, condition  
- Handles multiple cities with the same name  

---

## Quick Start

1. Clone & install:
```bash
git clone <repo-url>
cd weather-api
npm install
````

2. Start server:

```bash
npm start
```

Server runs at `http://localhost:3000`

---

## API Endpoints

### Search Locations

```http
GET /search/:city
```

**Example:** `/search/London`
Returns all matches with lat/lon.

### Get Weather

```http
GET /weather?lat=<lat>&lon=<lon>&name=<city>
```

**Example:** `/weather?lat=51.5074&lon=-0.1278&name=London`
Returns current temperature, wind, humidity, and condition.

---

## Example Response

```json
{
  "location": "London, United Kingdom",
  "temperature": 18,
  "wind": 12,
  "humidity": 65,
  "condition": "Clear sky"
}
```

---

## Notes

* Works for most major cities
* Small villages or misspellings may fail
* Free hosting may cause cold start delays

---

## Hosting

Recommended free hosting: [Render](https://render.com), [Railway](https://railway.app), [Vercel](https://vercel.com)

---

## License

MIT
