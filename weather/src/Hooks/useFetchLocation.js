import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchLocation = (zipCode) => {
  //fetching latitude, longitude coordinates from openweather api
  const API_KEY = '8ad5a910497f1f0817efb4a78ca60e09';
  const GEOCODE_URL = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=${API_KEY}`;

  const [location, setLocation] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(GEOCODE_URL);
        setLocation(res.data);
        console.log('location', location);
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

    fetchData();
  }, [zipCode]);

  console.log('fetchLocation ran');

  // const geocodeData = axios.get(GEOCODE_URL).then((res) => {
  //   const geocodeData = res.data;
  //   console.log(geocodeData);

  //   return geocodeData;
  // });

  return location;
};

export default useFetchLocation;
