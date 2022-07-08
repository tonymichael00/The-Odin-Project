import axios from 'axios';
import { useEffect, useState } from 'react';
import ApiKey from '../ApiKey';

const useFetchWeather = (zipCode) => {
  //fetching latitude, longitude coordinates from openweather api
  const API_KEY = ApiKey();
  const GEOCODE_URL = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=${API_KEY}`;
  console.log('API_KEY', API_KEY);

  const [weather, setWeather] = useState([]);

  useEffect(() => {
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

        const temperatures = forecast.map((day) => {
          return day.main.temp;
        });

        console.log('forecast', forecast);
        console.log('temperatures', temperatures);

        setWeather(temperatures);
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
    // axios.get(FORECAST_URL).then((res) => {
    //   const weatherData = res.data;
    //   const { list } = weatherData;
    //   const fiveDay = list.filter((e, i) => {
    //     if ((i + 8) % 8 === 0) {
    //       return true;
    //     } else return false;
    //   });

    //   const tempFiveDay = fiveDay.map((day) => {
    //     return day.main.temp;
    //   });

    //   console.log('weatherData', weatherData);
    //   console.log('list', list);
    //   console.log('fiveDay', fiveDay);
    //   console.log('tempFiveDay', tempFiveDay);
    // });

    fetchForecast();
  }, []);

  console.log('FETCHWEATHER RAN');
  // console.log('location', location);

  // const geocodeAPI = await fetchLocation();
  // let { lat, lon } = geocodeAPI;

  // console.log('lat');
  // console.log(lat);
  // console.log('lon');
  // console.log(lon);
  return weather;
};

export default useFetchWeather;
