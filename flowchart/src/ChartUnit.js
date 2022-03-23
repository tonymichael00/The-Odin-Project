import React from 'react';
import TxtArea from './shapes/TxtArea';

function ChartUnit() {
  return (
    <div className="chart-unit">
      <div className="shape-sides left-side">
        <img src="circleR.svg" alt="left circle" />
      </div>

      <TxtArea />
      <div className="shape-sides right side">
        <img src="circleR.svg" alt="right circle" />
      </div>
    </div>
  );
}

export default ChartUnit;
