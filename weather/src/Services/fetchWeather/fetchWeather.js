import React from 'react';

const fetchWeather = async (zipCode) => {
  const API_KEY = '8ad5a910497f1f0817efb4a78ca60e09';
  //fetching latitude, longitude coordinates from openweather api
  const fetchLocation = async () => {
    let geocodeUrl = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=${API_KEY}`;
    // const TEMP_URL = ""
    console.log(geocodeUrl);

    return fetch(geocodeUrl)
      .then((res) => res.json())
      .then((data) => data);
  };

  const geocodeAPI = await fetchLocation();
  let { lat, lon } = geocodeAPI;
};

export default fetchWeather;
