import React, { useContext } from "react";
import { CounterStateContext } from "../context/CounterContext";

const CounterDisplay = () => {
    const state = useContext(CounterStateContext);
    if(!state) throw new Error("CounterStateContext is not provided");

    return <h1>Count: {state.count}</h1>;
};

export default CounterDisplay;