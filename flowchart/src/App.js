import './App.css';
import ChartUnit from './ChartUnit';
import NavBar from './NavBar/NavBar';
import Terminal from './shapes/Terminal';

function App() {
  return (
    <div className="app">
      <NavBar />
      <div id="chart-area">
        <Terminal />
        <Terminal />
        <Terminal />
        <Terminal />
        <Terminal />
      </div>
    </div>
  );
}

export default App;
