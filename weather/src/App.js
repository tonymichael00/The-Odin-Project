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
  const RANGE_TEMP = '30';
  const [rangeTemp, setRangeTemp] = useState(RANGE_TEMP);

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
          setRangeTemp={setRangeTemp}
          RANGE_TEMP={RANGE_TEMP}
        />
        {/* {weatherData !== [] && (
          )} */}
        <Calendar
          error={error}
          weatherData={weatherData}
          prefTemperature={prefTemperature}
          rangeTemp={rangeTemp}
        />
      </div>
    </div>
  );
}

export default App;
