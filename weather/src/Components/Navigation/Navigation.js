import React, { useState } from 'react';
import './Navigation.css';

const Navigation = ({
  searchZip,
  setPrefTemperature,
  setRangeTemp,
  RANGE_TEMP,
}) => {
  const [zipCode, setZipCode] = useState('');
  const [tempForm, setTempForm] = useState('');
  const [rangeForm, setRangeForm] = useState(RANGE_TEMP);

  const onSubmit = (e) => {
    e.preventDefault();
    searchZip(zipCode);
    setPrefTemperature(tempForm);
    console.log('tempForm', tempForm);
    setRangeTemp(rangeForm);
  };

  return (
    <div id="nav-container">
      <div className="nav">
        <div className="nav-header">
          <a href="_blank">Weather</a>
        </div>
        <form className="nav-form" onSubmit={onSubmit}>
          <label form="zipCode">Zip Code: </label>
          <input
            type="text"
            required
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <label form="temp">Temp (F): </label>
          <input
            type="text"
            required
            value={tempForm}
            onChange={(e) => setTempForm(e.target.value)}
          />
          <label form="temp">Temp Range: </label>
          <input
            type="text"
            required
            value={rangeForm}
            onChange={(e) => setRangeForm(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navigation;
