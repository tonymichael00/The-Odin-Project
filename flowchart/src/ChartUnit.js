import React from 'react';
import TxtArea from './shapes/TxtArea';

function ChartUnit() {
  return (
    <div className="chart-unit">
      <img
        src="compTerminal.svg"
        alt="background shape"
        className="background-shape"
      />
      <TxtArea />
    </div>
  );
}

export default ChartUnit;
