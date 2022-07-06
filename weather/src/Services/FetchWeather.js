import axios from 'axios';
import { useEffect } from 'react';

const FetchWeather = (zipCode) => {
  //fetching latitude, longitude coordinates from openweather api
  let tempFiveDay = [];
  // let geocodeData = {};
  // let lat = '';
  // let lon = '';

  // const TEMP_URL = ""
  console.log('fetch ran');

  useEffect(() => {
    const API_KEY = '8ad5a910497f1f0817efb4a78ca60e09';
    const GEOCODE_URL = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=${API_KEY}`;

    axios.get(GEOCODE_URL).then((res) => {
      const geocodeData = res.data;
      const { lat, lon } = geocodeData;
      const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial `;
      console.log(geocodeData);

      axios.get(FORECAST_URL).then((res) => {
        const weatherData = res.data;
        const { list } = weatherData;
        const fiveDay = list.filter((e, i) => {
          if ((i + 8) % 8 === 0) {
            return true;
          } else return false;
        });

        const tempFiveDay = fiveDay.map((day) => {
          return day.main.temp;
        });

        console.log('weatherData', weatherData);
        console.log('list', list);
        console.log('fiveDay', fiveDay);
        console.log('tempFiveDay', tempFiveDay);
      });
    });
  }, []);

  // const geocodeAPI = await fetchLocation();
  // let { lat, lon } = geocodeAPI;

  // console.log('lat');
  // console.log(lat);
  // console.log('lon');
  // console.log(lon);
  return tempFiveDay;
};

export default FetchWeather;
