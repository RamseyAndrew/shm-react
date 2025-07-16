import { useState } from "react";

//return [currentState,function:updateState]

function SimpleState() {
  //Rule: Initial State
  const state = useState(10);

  let clicked = 0;
  const increment = () => {
    console.log(state);
    let currentState = state[0];
    let newState = currentState + 1;
    let updateState = state[1];

    updateState(newState);

  };

  return (
    <div>
      <div>
        <button onClick={increment}>Click Me</button>
      </div>
      
      <h3>Clicked  {clicked}</h3>
      <h3>Clicked {state[0]}</h3>
    </div>
  );
}

export default SimpleState;