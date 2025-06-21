import React, { useContext } from 'react';
import { CounterDispatcherContext} from '../context/CounterContext';

const CounterButtons: React.FC = () => {
    const dispatch = useContext(CounterDispatcherContext);

    return (
        <div style={{ display: 'flex', gap: 8}}>
            <button onClick={()=>dispatch({ type: 'DECREMENT' })}>- 1</button>
            <button onClick={()=>dispatch({ type: 'INCREMENT' })}>+ 1</button>
            <button onClick={()=>dispatch({ type: 'RESET' })}>リセット</button>
        </div>
    );
};

export default CounterButtons;