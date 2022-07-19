import React from 'react';
import Days from './Components/Days';
import './Calendar.css';

const Calendar = ({ error, weatherData }) => {
  // let temperature,
  //   date = null;

  // if (weatherData !== null) {
  //   temperature = weatherData.map((day) => {
  //     return day.temp;
  //   });

  //   date = weatherData.map((day) => {
  //     return day.date;
  //   });
  // }

  // console.log('date', date);
  // console.log('temperature', temperature);

  const daysMap = weatherData.map((day) => (
    // const {temperature} = day;
    <Days temperature={day.temperature} date={day.date} key={day.date} />
  ));

  console.log('daysMap', daysMap);

  return (
    <div className="calendar">
      {!error && <p>error</p>}
      {daysMap}
    </div>
  );
};

export default Calendar;
