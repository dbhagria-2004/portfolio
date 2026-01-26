from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import time

app = Flask(__name__)
CORS(app)

API_KEY = "8c9d0d027d166f37b086f552d2f6911b"

# Simple cache: { "lat-lon": (data, timestamp) }
cache = {}
CACHE_EXPIRY = 600  # 10 minutes

# Map OpenWeatherMap 'main' condition to icon and message
WEATHER_MAP = {
    "Clear": ("☀️", "Perfect day to code outdoors!"),
    "Clouds": ("⛅", "A bit cloudy, still good for coding ☁️"),
    "Rain": ("🌧️", "Better stay indoors ☔"),
    "Drizzle": ("🌧️", "Light rain, maybe take an umbrella ☔"),
    "Thunderstorm": ("⚡", "Stay safe indoors! Thunderstorm alert ⚡"),
    "Snow": ("❄️", "Cozy coding day ❄️"),
    "Mist": ("🌫️", "Misty weather, drive carefully 🌫️"),
    "Smoke": ("🌫️", "Smoky air, maybe stay inside 🌫️"),
    "Haze": ("🌫️", "Hazy day, keep hydrated 🌫️"),
    "Dust": ("🌪️", "Dusty outdoors 🌪️"),
    "Fog": ("🌫️", "Foggy weather 🌫️"),
    "Sand": ("🌪️", "Sandy conditions 🌪️"),
    "Ash": ("🌋", "Volcanic ash in the air 🌋"),
    "Squall": ("🌬️", "Windy squall 🌬️"),
    "Tornado": ("🌪️", "Tornado alert! Stay safe 🌪️"),
    "Wind": ("🌬️", "Windy day 🌬️")
}

@app.route("/weather")
def weather():
    lat = request.args.get("lat")
    lon = request.args.get("lon")

    if not lat or not lon:
        return jsonify({"error": "Missing lat or lon"}), 400

    cache_key = f"{lat}-{lon}"
    current_time = time.time()

    # Return cached data if available
    if cache_key in cache:
        data, timestamp = cache[cache_key]
        if current_time - timestamp < CACHE_EXPIRY:
            return jsonify(data)

    # Fetch from OpenWeatherMap
    url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric"
    try:
        # Add timeout to avoid hanging requests; raise for non-200
        response = requests.get(url, timeout=8)
        response.raise_for_status()
        ow_data = response.json()
    except requests.exceptions.RequestException as e:
        return jsonify({"error": "Failed to fetch weather", "details": str(e)}), 500

    # Extract relevant fields
    main = ow_data.get("main", {})
    weather_info = ow_data.get("weather", [{}])[0]
    city_name = ow_data.get("name", "Unknown")
    condition = weather_info.get("main", "Unknown")

    # Map condition to icon and message
    icon, message = WEATHER_MAP.get(condition, ("🌈", "Weather's interesting! Keep coding 💻"))

    data = {
        "city": city_name,
        "temp": round(main.get("temp", 0)),
        "feels_like": round(main.get("feels_like", 0)),
        "condition": condition,
        "icon": icon,
        "message": message
    }

    # Cache the data
    cache[cache_key] = (data, current_time)

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
