import React from 'react';
import Days from './Components/Days';
import './Calendar.css';

const Calendar = ({ error, weatherData, prefTemperature }) => {
  // console.log('date', date);
  // console.log('temperature', temperature);

  const daysMap = weatherData.map((day) => (
    // if(day === null){
    //   <div>
    //       &#x1F60E;
    //   </div>
    // }else{
    <Days
      temperature={day.temperature}
      date={day.date}
      prefTemperature={prefTemperature}
      error={error}
      key={day.date}
    />
    // }
  ));

  console.log('daysMap', daysMap);

  return (
    <div className="calendar">
      {daysMap}
      {/* // <div className="calendar">{error ? <Error /> : daysMap}</div> */}
    </div>
  );
};

export default Calendar;
