import React from 'react';
import './Days.css';

const Days = ({ temperature, date }) => {
  // console.log(key);
  return (
    <div className="day">
      temp: {temperature} date: {date}
    </div>
  );
};

export default Days;
