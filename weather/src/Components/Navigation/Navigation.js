import React from 'react';
import './Navigation.css';

const Navigation = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="nav">
      <div className="nav-header">
        <a href="_blank">Weather</a>
      </div>
      <form className="nav-form">
        <label form="zipCode">Zip Code: </label>
        <input type="text" required />
        <label form="temp">Temp (F): </label>
        <input type="text" required />
        <label form="temp">Temp Range: </label>
        <input type="text" />
        <button type="submit" className="submit-btn" onClick={onSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Navigation;
