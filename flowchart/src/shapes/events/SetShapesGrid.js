import React, { useState } from 'react';
import Terminal from '../Terminal';

function SetShapesGrid() {
  const [shapesGrid, SetShapesGrid] = useState([Terminal]);

  return { shapesGrid };
}

export default SetShapesGrid;
