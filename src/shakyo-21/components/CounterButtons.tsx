import React, { useContext } from 'react';
import { CounterDispatchContext } from '../content/CounterContext';

const CounterButtons: React.FC = () => {
    const dispatch = useContext(CounterDispatchContext);

    if(!dispatch) return null;

    return (
        <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={() => dispatch({ type: "INCREMENT" })} >+1</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })} >-1</button>
            <button onClick={() => dispatch({ type: "RESET"})}>リセット</button>
        </div>
    );
};

export default CounterButtons;