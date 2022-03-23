import React from 'react';
// import './txtArea.svg';

function TxtArea() {
  return (
    <div className="txt-cont">
      <p>this is some words</p>
      <img src="top&bottom.svg" alt="text area" className="txt-shape" />

      {/* <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 102"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1H100M100 101H0" stroke="white" stroke-width="1px" />
      </svg> */}
    </div>
  );
}

export default TxtArea;
