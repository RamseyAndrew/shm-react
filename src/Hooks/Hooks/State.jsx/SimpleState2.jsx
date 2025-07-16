function SimpleState2(){
    const [currentState, setCurrentState] =useState[0]

    const increment = () => {
     setCurrentState(currentState + 1);
    }
    const decrement =() => {
         let newState =currentState -1;
         setCurrentState(newState)
    };
  
     return(
        <div>
            <h1>SimpleState2</h1>
            <button onClick ={decrement}>-</button>
            <span>{currentState}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

import {useState} from "react"
export default SimpleState2;