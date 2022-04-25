//TODO: id cant begin with a zero and be a number.

import React, { createElement, useState } from 'react';
import Terminal from './shapes/Terminal';

function ChartArea() {
  const [shapesGrid, setShapesGrid] = useState([
    {
      shape: Terminal,
      id: '00',
      text: 'write something',
    },
    {
      shape: Terminal,
      id: '01',
      text: 'write something else',
    },
  ]);

  function handleKeyPress(value, id) {
    const tempShapesGrid = shapesGrid;
    tempShapesGrid[Number(id)].text = value;
    setShapesGrid(tempShapesGrid);
    console.log(tempShapesGrid[Number(id)]);
    console.table(shapesGrid);
    // setShapesGrid(...values);
    // console.log(key, id);
  }

  return (
    <div id="chart-area">
      {shapesGrid.map((cell) =>
        React.createElement(cell.shape, {
          handleKeyPress,
          id: cell.id,
          key: cell.id,
          text: cell.text,
        })
      )}
    </div>
  );
}

export default ChartArea;
