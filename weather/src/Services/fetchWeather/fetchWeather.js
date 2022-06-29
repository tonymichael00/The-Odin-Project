import React from 'react';

const fetchWeather = async (zipCode) => {
  const API_KEY = '8ad5a910497f1f0817efb4a78ca60e09';
  //fetching latitude, longitude coordinates from openweather api
  const fetchLocation = () => {
    let geocodeUrl = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=${API_KEY}`;
    // const TEMP_URL = ""
    console.log('fetch ran');
    return fetch(geocodeUrl)
      .then((res) => res.json())
      .then((data) => data);
  };

  // const geocodeAPI = await fetchLocation();
  // let { lat, lon } = geocodeAPI;

  // console.log('lat');
  // console.log(lat);
  // console.log('lon');
  // console.log(lon);
  // return geocodeAPI;
};

export default fetchWeather;
