import './App.css';
import ChartUnit from './ChartUnit';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <div className="app">
      <NavBar />
      <div id="chart-area">
        <ChartUnit />
        <ChartUnit />
        <ChartUnit />
        <ChartUnit />
      </div>
    </div>
  );
}

export default App;
