import React from 'react';
import Days from './Components/Days';
import './Calendar.css';

const Calendar = ({ error, weatherData, prefTemperature }) => {
  // console.log('date', date);
  // console.log('temperature', temperature);

  const daysMap = weatherData.map((day) => (
    <Days
      temperature={day.temperature}
      date={day.date}
      prefTemperature={prefTemperature}
      key={day.date}
    />
  ));

  console.log('daysMap', daysMap);

  return (
    // <div className="calendar-container">
    <div className="calendar">
      {/* {!error && <p>error</p>} */}
      {daysMap}
    </div>
    // </div>
  );
};

export default Calendar;
