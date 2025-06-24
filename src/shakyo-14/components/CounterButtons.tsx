import React, { useContext } from "react";
import { CounterDispatchContext } from "../context/CounterContext";

const CounterButtons = () => {
    const dispatch = useContext(CounterDispatchContext);
    if(!dispatch) throw new Error("CounterDispatchContext is not provided");

    return (
        <div>
            <button onClick={() => dispatch({ type: "INCREMENT"})}>+1</button>
            <button onClick={() => dispatch({ type: "DECREMENT"})}>-1</button>
        </div>
    );
};

export default CounterButtons;