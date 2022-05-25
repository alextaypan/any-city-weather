import axios from "axios";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/weather/";
const API_KEY = "04fc84e5f5a3b3191025682530487cc6";

const fetchWeather = async (cityName) => {
  try {
    const { data } = await axios.get(`?q=${cityName}&appid=${API_KEY}`);

    const results = data.results;

    return results;
  } catch (error) {
    console.error("Smth wrong happened", error.message);
  }
};

export default fetchWeather;
