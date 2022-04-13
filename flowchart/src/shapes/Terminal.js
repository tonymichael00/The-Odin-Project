import React, { useRef } from 'react';

function Terminal({ id, text, changeShape, handleKeyPress }) {
  const textAreaRef = useRef();

  // console.log(id, text);

  function handleClick() {
    textAreaRef.current.focus();
  }

  return (
    <div className="chart-unit" onClick={handleClick}>
      <img
        src="compTerminal.svg"
        alt="background shape"
        className="background-shape terminal"
      />

      <div className="txt-cont">
        <textarea
          ref={textAreaRef}
          onChange={() => handleKeyPress}
          value={text}
        ></textarea>
        {/* <img src="top&bottom.svg" alt="text area" className="txt-shape" /> */}

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
    </div>
  );
}

export default Terminal;
