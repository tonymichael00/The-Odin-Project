import React, { useState } from 'react';
import useFetchWeather from '../../Hooks/useFetchWeather';
import './Navigation.css';

const Navigation = ({ setZipCode }) => {
  const [zipCodeForm, setZipCodeForm] = useState('');
  const [tempForm, setTempForm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // useFetchWeather();
  };
  return (
    <div className="nav">
      <div className="nav-header">
        <a href="_blank">Weather</a>
      </div>
      <form className="nav-form" onSubmit={handleSubmit}>
        <label form="zipCode">Zip Code: </label>
        <input
          type="text"
          required
          value={zipCodeForm}
          onChange={(e) => setZipCodeForm(e.target.value)}
        />
        <label form="temp">Temp (F): </label>
        <input
          type="text"
          required
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
