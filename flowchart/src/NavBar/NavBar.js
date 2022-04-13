import React from 'react';
import './NavBar.css';

function NavBar({ handleChangeShape }) {
  // const handleClick = (e) => {
  //   console.log(e.target.id);

  //   // switch (e.target.id) {
  //   //   case 'terminal-btn':
  //   //   case 'io-btn':

  //   //     break;

  //   //   default:
  //   //     break;
  //   // }
  // };

  return (
    <div className="nav-bar">
      <div className="nav-bar-item" id="print-btn">
        Print
      </div>
      <div className="nav-bar-item" id="save-as-btn">
        Save As
      </div>
      <div
        className="nav-bar-item"
        id="terminal-btn"
        onClick={handleChangeShape}
      >
        1. Terminal
      </div>
      <div className="nav-bar-item" id="io-btn" onClick={handleChangeShape}>
        2. I/O
      </div>
      <div className="nav-bar-item" id="logo-btn">
        GoChart
      </div>

      {/* <a href>Print </a>
      <a href>Save As </a>
      <p>
        </p>1. Terminal 2. I/O */}
    </div>
  );
}

export default NavBar;
