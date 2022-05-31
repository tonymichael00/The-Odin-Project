import React, { useState } from 'react';
import Terminal from '../Terminal';
import { nanoid } from 'nanoid';

//might be unneccesary

function useShapesGrid() {
  const [shapeText, setShapeText] = useState([
    ['write something1', 'write something2'],
    ['write something3', 'write something4', 'write something5'],
  ]);

  const [shapes, setShapes] = useState(
    [
      <Terminal text={shapeText} key={nanoid()} />,
      <Terminal text={shapeText} key={nanoid()} />,
    ],
    [
      <Terminal text={shapeText} key={nanoid()} />,
      <Terminal text={shapeText} key={nanoid()} />,
      <Terminal text={shapeText} key={nanoid()} />,
    ]
  );

  return { shapes, shapeText };
}

export default useShapesGrid;
