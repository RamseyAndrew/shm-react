function SimpleState2(){
    const [currentState, setCurrentState] =useState[0]

    const increment = () => {
     setCurrentState(currentState + 1);
    }
    const decrement =() => {
        setCurrentState(currentState -1);
    };
  
     return(
        <div>
            <h1>SimpleState2</h1>
            <button>-</button>
            <span>{currentState}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default SimpleState2;