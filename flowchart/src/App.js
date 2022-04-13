//TODO: BUG DRAGGING SHAPE INTO TEXTAREA
//TODO: NEXT DAY
// FIGURE OUT TEXT INPUT FOR CREATING NEW SHAPES
// CREATE STATE ARRAY FOR SHAPES
// MAP OVER ARRAY FOR PLACEMENT
// PROGRAM TEXT INPUT
// DRAW LINES

import './App.css';
import NavBar from './NavBar/NavBar';
import ShapePlacer from './ChartArea';
import Io from './shapes/Io';
import Terminal from './shapes/Terminal';

function App() {
  function changeShape(e) {}

  return (
    <div className="app">
      <NavBar />
      <ShapePlacer />
      {/* <Terminal />
        <Io />
        <Io />
        <Io /> */}
    </div>
  );
}

export default App;
