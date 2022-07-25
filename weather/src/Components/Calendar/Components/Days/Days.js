import React from 'react';
import './Days.css';

const Days = ({ temperature, date, prefTemperature, rangeTemp }) => {
  // console.log(key);
  //limits temperature range to 15 above and below preferred temperature
  const temperatureCap = rangeTemp / 2;
  console.log('temperatureCap', temperatureCap);

  //calcs percentage difference
  let tempPercentage = temperature - prefTemperature;
  // console.log('tempPercentage', tempPercentage);
  tempPercentage = Math.abs(tempPercentage);
  if (tempPercentage > temperatureCap) tempPercentage = temperatureCap;
  tempPercentage = tempPercentage / temperatureCap;

  //light yellow
  //rgb(255,237,144) hsl(50,100,50)
  //lightblue
  //rgb(144,240,255) hsl(188, 100, 50)
  //difference
  //111, -3, -111   -138, 0, 0
  //add percentage difference back to light blue
  //first color(1), 3 values(1-3),

  const color11 = 50;
  const color12 = 100;
  const color13 = 50;

  //second color, 3 values
  const color21 = color11;
  const color22 = color12;
  const color23 = 100;

  let rColor = color11 - color21;
  let gColor = color12 - color22;
  let bColor = color13 - color23;

  rColor = rColor * tempPercentage;
  gColor = gColor * tempPercentage;
  bColor = bColor * tempPercentage;

  rColor = Math.round(color11 - rColor);
  gColor = Math.round(color12 - gColor);
  bColor = Math.round(color13 - bColor);

  // console.log('hsl', rColor, gColor, bColor);
  // console.log(`backgroundColor: rgb(${rColor},${gColor},${bColor})`);

  return (
    <div
      className="day"
      style={{ backgroundColor: `hsl(${rColor},${gColor}%,${bColor}%)` }}
    >
      <div className="date">{date}</div>
      <div className="temperature">{temperature + '°'}</div>

      {/* temp: {temperature} date: {date} */}
    </div>
  );
};

export default Days;
