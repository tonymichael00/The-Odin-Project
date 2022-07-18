import axios from 'axios';
import ApiKey from '../ApiKey';

const fetchWeather = (zipCode) => {
  //fetching latitude, longitude coordinates from openweather api
  const API_KEY = ApiKey();
  const GEOCODE_URL = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=${API_KEY}`;
  console.log('API_KEY', API_KEY);

  let filteredForecast = [];

  const fetchLocation = async () => {
    try {
      const res = await axios.get(GEOCODE_URL);
      console.log('LOCATION REQUESTED');
      return res.data;
    } catch (err) {
      if (err.res) {
        console.log(err.res.data);
        console.log(err.res.status);
        console.log(err.res.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  const fetchForecast = async () => {
    const { lat, lon } = await fetchLocation();
    const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial `;

    try {
      const res = await axios.get(FORECAST_URL);
      console.log('WEATHER REQUESTED');
      const weatherData = res.data;
      const { list } = weatherData;
      const forecast = list.filter((e, i) => {
        if ((i + 8) % 8 === 0) {
          return true;
        } else return false;
      });

      const filteredForecast = forecast.map((day) => {
        return { temp: day.main.temp, date: day.dt_txt };
      });

      console.log('forecast', forecast);
      console.log('filteredForecast', filteredForecast);
    } catch (err) {
      if (err.res) {
        console.log(err.res.data);
        console.log(err.res.status);
        console.log(err.res.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  fetchForecast();

  console.log('FETCHWEATHER RAN');

  return filteredForecast;
};

export default fetchWeather;
