import './App.css';
import Navigation from './Components/Navigation';
import Calendar from './Components/Calendar';
//TODO
//create a temp range and base colors off that

function App() {
  return (
    <div className="App">
      <h1>Sanguine</h1>
      <Navigation />
      <Calendar />
    </div>
  );
}

export default App;
