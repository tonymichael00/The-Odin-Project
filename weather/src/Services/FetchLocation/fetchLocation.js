import axios from 'axios';

const fetchLocation = (zipCode) => {
  //fetching latitude, longitude coordinates from openweather api

  console.log('fetch ran');

  const API_KEY = '8ad5a910497f1f0817efb4a78ca60e09';
  const GEOCODE_URL = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=${API_KEY}`;

  const geocodeData = axios.get(GEOCODE_URL).then((res) => {
    const geocodeData = res.data;
    console.log(geocodeData);

    return geocodeData;
  });

  return geocodeData;
};

export default fetchLocation;
