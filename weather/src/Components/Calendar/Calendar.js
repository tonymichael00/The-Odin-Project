import React from 'react';
import Days from './Components/Days';
import Month from './Components/Month';

const Calendar = () => {
  return (
    <div>
      <Month />
      <Days />
    </div>
  );
};

export default Calendar;
