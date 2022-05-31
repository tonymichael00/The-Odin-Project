//TODO: BUG DRAGGING SHAPE INTO TEXTAREA
//TODO: NEXT DAY
// changing shape placement. Create double array of objects.
// Text will be updated in each shape with state

import './App.css';
import NavBar from './NavBar/NavBar';
import ChartArea from './ChartArea';
import Io from './shapes/Io';
import Terminal from './shapes/Terminal';

function App() {
  function changeShape(e) {}

  return (
    <div className="app">
      <NavBar />
      <ChartArea />
      {/* <Terminal />
        <Io />
        <Io />
        <Io /> */}
    </div>
  );
}

export default App;
