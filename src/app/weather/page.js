"use client";
import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
      } else {
        console.error("APIから天気データを取得できませんでした。");
      }
    } catch (error) {
      console.error("エラーが発生しました:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="都市名を入力"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-500 text-white p-2 rounded"
        >
          天気情報を取得する
        </button>
      </div>

      {weather && (
        <div className="bg-white shadow rounded p-4">
          <h1 className="text-xl font-bold">{weather.name}の天気</h1>
          <p className="text-gray-700">最高気温: {weather.main.temp_max}°C</p>
          <p className="text-gray-700">最低気温: {weather.main.temp_min}°C</p>
          <p className="text-gray-700">湿度: {weather.main.humidity}%</p>
          <p className="text-gray-700">風速: {weather.wind.speed} m/s</p>
          <p className="text-gray-700">
            天気: {weather.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;
