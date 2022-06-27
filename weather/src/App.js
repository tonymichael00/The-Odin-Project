import './App.css';
import Navigation from './Components/Navigation';
import Calendar from './Components/Calendar';
import fetchWeather from './Services/fetchWeather';
//TODO
//create a temp range and base colors off that

function App() {
  console.log(fetchWeather('90210'));

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
