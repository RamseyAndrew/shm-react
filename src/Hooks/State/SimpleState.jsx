import { useState } from "react";

//return [currentState,function:updateState]

function SimpleState() {
  //Rule: Initial State
  const state = useState(10);

  let clicked = 0;
  const increment = () => {
    console.log(state);
  };

  return (
    <div>
      <div>
        <button onClick={increment}>Click Me</button>
      </div>
      <h3>Clicked {clicked}</h3>
    </div>
  );
}

export default SimpleState;