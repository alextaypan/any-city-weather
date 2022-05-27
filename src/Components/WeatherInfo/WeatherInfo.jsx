import { useEffect, useState } from "react";
import fetchWeather from "../../services/weatherAPI";
import ErrorView from "../ErrorView/ErrorView";
import Loader from "../Loader";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected,",
};

function WeatherInfo({ cityName }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!cityName) {
      return;
    }
    fetchWeatherData();
    setStatus(Status.PENDING);
  }, [cityName]);

  const fetchWeatherData = async () => {
    try {
      const { data } = await fetchWeather(cityName);
      const { name } = data;
      const { country } = data.sys;
      const { temp, temp_min, temp_max, feels_like, humidity } = data.main;
      const { description, icon } = data.weather[0];
      const { speed, deg } = data.wind;

      setWeatherData({
        name,
        country,
        description,
        icon,
        temp: temp.toFixed(),
        feels_like: feels_like.toFixed(),
        temp_min: temp_min.toFixed(),
        temp_max: temp_max.toFixed(),
        speed,
        deg,
        humidity,
      });
      setStatus(Status.RESOLVED);
    } catch (error) {
      setError(error.message);
      setStatus(Status.REJECTED);
    }
  };

  if (status === Status.IDLE) {
    return null;
  }

  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return <ErrorView error={error.message} />;
  }

  // if (status === Status.RESOLVED) {
  //   return <DataView weatherData={weatherData} />;
  // }
}

export default WeatherInfo;
