import React from 'react';

function HandleKeyPress(value, id) {
  let tempShapesGrid = shapesGrid;
  tempShapesGrid[id].text = value;
  setShapesGrid(tempShapesGrid[id]);
  console.log(value);
}

export default HandleKeyPress;
