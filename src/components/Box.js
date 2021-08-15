import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();
  function handleMeasure() {
    const div = elementRef.current;
    console.log(div);
  }
  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button onClick={handleMeasure}>Measure</button>
    </div>
  );
}

export default Box;
