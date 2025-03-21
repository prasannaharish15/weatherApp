import React, { useEffect, useState } from "react";
import "./WeatherDetails.css";

function WeatherDetails({ city, goBack }) {
    const [weatherData, setWeatherData] = useState(null); 
    const [error, setError] = useState(null); 
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((data) => {
                if (data.cod !== 200) {
                    setError(data.message); 
                    setWeatherData(null);
                } else {
                    setWeatherData(data);
                    setError(null);
                }
            })
            .catch((err) => setError("Failed to fetch weather data"));
    }, []); 

    return (
        <div className="weather-details">
            <div className="weather-box">
            <h3>Weather Details for {city}{weatherData?.sys?.country ? `, ${weatherData.sys.country}` : ""}</h3>


                {error ? (
                    <p style={{ color: "red" }}>{error}</p>
                ) : weatherData ? (
                    <>
                        <p>🌡️ Temperature: {weatherData.main.temp}°C</p>
                        <p>💧 Humidity: {weatherData.main.humidity}%</p>
                        <p>🌤 Condition: {weatherData.weather[0].description}</p>
                    </>
                ) : (
                    <p>Loading weather data...</p> 
                )}

                <button className="back-button" onClick={goBack}>Back</button>
            </div>
        </div>
    );
}

export default WeatherDetails;
