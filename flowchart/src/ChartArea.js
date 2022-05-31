//TODO: id cant begin with a zero and be a number.

import React, { useState } from 'react';
import useShapesGrid from './shapes/hooks/useShapesGrid';

function ChartArea() {
  // const [shapes, setShapes] = useState(
  //   ['Terminal', 'Terminal'],
  //   ['Terminal', 'Terminal', 'Terminal']
  // );
  // const [shapeText, setShapeText] = useState(
  //   ['write something', 'write something'],
  //   ['write something', 'write something', 'write something']
  // );
  // const [shapesGrid, setShapesGrid] = useState([
  //   [
  //     {
  //       shape: Terminal,
  //       id: '00',
  //       text: 'write something',
  //     },
  //     {
  //       shape: Terminal,
  //       id: '01',
  //       text: 'write something else',
  //     },
  //   ],
  //   [
  //     {
  //       shape: Terminal,
  //       id: '02',
  //       text: 'write something1',
  //     },
  //     {
  //       shape: Terminal,
  //       id: '03',
  //       text: 'write something else2',
  //     },
  //     {
  //       shape: Terminal,
  //       id: '04',
  //       text: 'write something else3',
  //     },
  //   ],
  // ]);

  // shapes.foreach((shape, i) => {
  //   switch (shape) {
  //     case 'terminal':
  //       <Terminal text={shapeText[i]} />;
  //       break;

  //     default:
  //       break;
  //   }
  // });

  const { shapes } = useShapesGrid();
  console.log('shapes');
  console.log(shapes);

  // shapes.map((cell) =>
  //   React.createElement(cell, {
  //     id: cell.id,
  //     key: cell.id,
  //     text: cell.text,
  //   })
  // );

  // function handleKeyPress(value, id) {
  //   const tempShapesGrid = shapesGrid;
  //   tempShapesGrid[Number(id)].text = value;
  //   setShapesGrid(tempShapesGrid);
  //   console.log(tempShapesGrid[Number(id)]);
  //   console.table(shapesGrid);
  //   // setShapesGrid(...values);
  //   // console.log(key, id);
  // }

  return <div id="chart-area">{shapes.map((column) => column)}</div>;
}

export default ChartArea;
