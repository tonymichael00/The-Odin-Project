import './App.css';
import Form from './Components/Form';
import Calendar from './Components/Calendar';
import useFetchWeather from './Hooks/useFetchWeather';
import { useState } from 'react';
// import FetchWeather from './Services/FetchWeather';
// import fetchLocation from './Services/FetchLocation/fetchLocation';
// import FetchDays from './Services/FetchDays';

//TODO:
//make weather in Form unclickable

function App() {
  const { error, weatherData, searchZip } = useFetchWeather();
  const [prefTemperature, setPrefTemperature] = useState(0);

  // console.log('weather', weather);
  if (error) console.log('SEARCH FAILED');
  console.log('weatherData', weatherData);

  return (
    <div className="App">
      <h1 id="logo">Sanguine</h1>
      <div id="instructions">
        <div id="instructions-cont">
          <p>
            Feel free to search for your optimum weather for the next 5 days.
            Ideal days will be yellow and turn white the less ideal they become.
            Just input your zip code and ideal temperature.
          </p>
        </div>
      </div>

      <div id="content">
        <Form searchZip={searchZip} setPrefTemperature={setPrefTemperature} />
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
