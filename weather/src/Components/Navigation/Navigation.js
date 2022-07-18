import React, { useState } from 'react';
import './Navigation.css';

const Navigation = ({ fetchWeather }) => {
  const [zipCode, setZipCode] = useState('');
  const [tempForm, setTempForm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    fetchWeather(zipCode);
  };

  return (
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
          // required
          // ^^ uncomment later
          value={tempForm}
          onChange={(e) => setTempForm(e.target.value)}
        />
        <label form="temp">Temp Range: </label>
        <input type="text" />
        <button type="submit" className="submit-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default Navigation;
