import './App.css';
import Navigation from './Components/Navigation';
import Calendar from './Components/Calendar';
import fetchWeather from './Services/fetchWeather';
// import FetchWeather from './Services/FetchWeather';
// import fetchLocation from './Services/FetchLocation/fetchLocation';
// import FetchDays from './Services/FetchDays';

//TODO:
//program form to get weather data

function App() {
  // console.log('weather', weather);

  return (
    <div className="App">
      <h1 id="logo">Sanguine</h1>
      <div id="content">
        <Navigation fetchWeather={fetchWeather} />
        <Calendar />
      </div>
    </div>
  );
}

export default App;
