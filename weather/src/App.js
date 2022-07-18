import './App.css';
import Navigation from './Components/Navigation';
import Calendar from './Components/Calendar';
// import FetchWeather from './Services/FetchWeather';
import { useEffect, useState } from 'react';
// import fetchLocation from './Services/FetchLocation/fetchLocation';
// import FetchDays from './Services/FetchDays';
import axios from 'axios';
import useFetchLocation from './Hooks/useFetchLocation';
import useFetchWeather from './Hooks/useFetchWeather';
//TODO:
//program form to get weather data

function App() {
  // const [zipCode, setZipCode] = useState('90210');
  // const [fiveDayTemp, setFiveDayTemp] = useState([]);

  // console.log('zipCode', zipCode);
  // console.log('fiveDayTemp', fiveDayTemp);

  // const weather = useFetchWeather(zipCode);
  // console.log('weather', weather);

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
