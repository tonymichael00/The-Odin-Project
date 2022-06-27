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
        <label for="zipCode">Zip Code: </label>
        <input type="text" required />
        <label for="temp">Temp (F): </label>
        <input type="text" required />
        <label for="temp">Temp Range: </label>
        <input type="text" />
        <button type="submit" className="submit-btn" onClick={onSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Navigation;
