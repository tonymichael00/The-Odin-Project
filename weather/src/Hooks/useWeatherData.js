import axios from 'axios';
import { useEffect, useState } from 'react';

const useWeatherData = ({ zipCode }) => {
  const [forecast, setForecast] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios.get(LOCATION_URL).then((res) => {
      const responseLocation = res.data;
      setLocation(responseLocation);
    });
  }, []);
};

export default useWeatherData;
