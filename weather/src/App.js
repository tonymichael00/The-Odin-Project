import './App.css';
import Navigation from './Components/Navigation';
import Calendar from './Components/Calendar';
import useFetchWeather from './Hooks/useFetchWeather';
// import FetchWeather from './Services/FetchWeather';
// import fetchLocation from './Services/FetchLocation/fetchLocation';
// import FetchDays from './Services/FetchDays';

//TODO:
//program form to get weather data

function App() {
  const { error, weatherData, searchZip } = useFetchWeather();
  // console.log('weather', weather);
  if (error) console.log('SEARCH FAILED');
  console.log('weatherData', weatherData);

  return (
    <div className="App">
      <h1 id="logo">Sanguine</h1>
      <div id="content">
        <Navigation searchZip={searchZip} />
        {/* {weatherData !== [] && (
          )} */}
        <Calendar error={error} weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
