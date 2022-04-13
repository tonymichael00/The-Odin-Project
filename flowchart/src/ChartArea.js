import React, { createElement, useState } from 'react';
import Terminal from './shapes/Terminal';

function ChartArea() {
  function handleKeyPress() {
    // let tempShapesGrid = shapesGrid;
    // tempShapesGrid[e.target.id].text = e.target.value;
    // setShapesGrid(tempShapesGrid[e.target.id]);
    // console.log(e.target.value);
  }

  const [shapesGrid, setShapesGrid] = useState([
    {
      shape: Terminal,
      id: '00',
      text: 'write something',
      handleKeyPress: handleKeyPress(),
    },
  ]);
  //   console.table(shapesGrid);

  return (
    <div id="chart-area">
      {React.createElement(shapesGrid[0].shape, {
        id: shapesGrid[0].id,
        text: shapesGrid[0].text,
      })}
      {/* {console.log(Terminal)} */}
    </div>
  );
}

export default ChartArea;
