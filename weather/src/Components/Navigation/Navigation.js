import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav-header">
        <a href="_blank">Weather</a>
      </div>
      <form className="nav-form">
        <label for="temp">Temp (F): </label>
        <input type="text" required />
        <label for="temp">Temp Range: </label>
        <input type="text" />
      </form>
    </div>
  );
};

export default Navigation;
