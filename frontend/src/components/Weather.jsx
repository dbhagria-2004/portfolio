import { useState, useEffect } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async (lat, lon) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // abort after 8s
    try {
      const res = await fetch(`/weather?lat=${lat}&lon=${lon}` , { signal: controller.signal });
      const data = await res.json();

      if (data.error) {
        console.error("Backend error:", data.details);
        throw new Error(data.error);
      }

      setWeather(data);
    } catch (err) {
      console.error("Failed to fetch weather:", err);

      // Fallback placeholder
      setWeather({
        city: "Boston",
        temp: 23,
        feels_like: 21,
        condition: "Sunny",
        icon: "☀️",
        message: "Perfect day to code outdoors!"
      });
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("User location:", latitude, longitude);
          fetchWeather(latitude, longitude);
        },
        () => {
          console.log("Location denied or unavailable, using default coordinates");
          fetchWeather(42.3601, -71.0589); // Boston fallback
        },
        { enableHighAccuracy: false, timeout: 7000, maximumAge: 300000 }
      );
    } else {
      console.log("Geolocation not supported, using default coordinates");
      fetchWeather(42.3601, -71.0589);
    }
  }, []);

  return (
    <section id="weather" className="section">
      {loading ? (
        <p>Loading weather...</p>
      ) : (
        <>
          <h4 className="weather__location">{weather.city}</h4>
          <p className="weather__temp">{weather.temp}°C</p>
          <p className="feels__like">Feels like: {weather.feels_like}°C</p>
          <p className="weather__condition">{weather.condition} {weather.icon}</p>
          <p className="weather__message">{weather.message}</p>
        </>
      )}
    </section>
  );
}
