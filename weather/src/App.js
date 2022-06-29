import './App.css';
import Navigation from './Components/Navigation';
import Calendar from './Components/Calendar';
import fetchWeather from './Services/fetchWeather';
import { useEffect } from 'react';
//TODO:
//follow youtube anthony sistilli api

function App() {
  useEffect(() => {
    console.log(fetchWeather('90210'));
    return null;
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
