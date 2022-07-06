import axios from 'axios';
import { useEffect } from 'react';

const FetchDays = ({ lat, lon }) => {
  // TODO: tempFiveDay referred to let and const
  let tempFiveDay = [];

  console.log('fetch ran');

  const API_KEY = '8ad5a910497f1f0817efb4a78ca60e09';
  const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial `;

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

  return tempFiveDay;
};

export default FetchDays;
