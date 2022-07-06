import './App.css';
import Navigation from './Components/Navigation';
import Calendar from './Components/Calendar';
import FetchWeather from './Services/FetchWeather';
import { useEffect, useState } from 'react';
import FetchLocation from './Services/FetchLocation/FetchLocation';
import FetchDays from './Services/FetchDays';
//TODO:
//program form to get weather data

function App() {
  const [zipCode, setZipCode] = useState('90210');
  const [latLon, setLatLon] = useState({});
  const [fiveDayTemp, setFiveDayTemp] = useState([]);

  console.log('zipCode', zipCode);

  useEffect(() => {
    FetchLocation(zipCode);
    console.log('this works location');
  }, []);

  useEffect(() => {
    FetchDays(latLon);

    console.log('this works days');
  }, []);

  return (
    <div className="App">
      <h1 id="logo">Sanguine</h1>
      <div id="content">
        <Navigation />
        <Calendar />
      </div>
    </div>
  );
}

export default App;
