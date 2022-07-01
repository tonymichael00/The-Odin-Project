import './App.css';
import Navigation from './Components/Navigation';
import Calendar from './Components/Calendar';
import FetchWeather from './Services/FetchWeather';
import { useEffect, useState } from 'react';
//TODO:
//follow youtube anthony sistilli api

function App() {
  const [zipCode, setZipCode] = useState('');
  const [fiveDayTemp, setFiveDayTemp] = useState([]);

  FetchWeather('90210');

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
