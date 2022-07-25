import './App.css';
import Navigation from './Components/Navigation';
import Calendar from './Components/Calendar';
import useFetchWeather from './Hooks/useFetchWeather';
import { useState } from 'react';
// import FetchWeather from './Services/FetchWeather';
// import fetchLocation from './Services/FetchLocation/fetchLocation';
// import FetchDays from './Services/FetchDays';

//TODO:
//rename Navigation component to WeatherForm

function App() {
  const { error, weatherData, searchZip } = useFetchWeather();
  const [prefTemperature, setPrefTemperature] = useState(0);

  // console.log('weather', weather);
  if (error) console.log('SEARCH FAILED');
  console.log('weatherData', weatherData);

  return (
    <div className="App">
      <h1 id="logo">Sanguine</h1>
      <div id="content">
        <Navigation
          searchZip={searchZip}
          setPrefTemperature={setPrefTemperature}
        />
        {/* {weatherData !== [] && (
          )} */}
        <Calendar
          error={error}
          weatherData={weatherData}
          prefTemperature={prefTemperature}
        />
      </div>
    </div>
  );
}

export default App;
