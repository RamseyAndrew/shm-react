
function SimpleState2(){
    const [currentState, setCurrentState] =useState(0)

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


export default SimpleState2;
import {useState} from "react"
