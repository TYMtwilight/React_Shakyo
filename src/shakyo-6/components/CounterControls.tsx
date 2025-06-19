import React, { useContext} from 'react';
import { CounterContext } from '../context/CounterContext';

const CounterControls: React.FC = () => {
    const ctx = useContext(CounterContext);
    if(!ctx) return null;

    const {count, setCount} = ctx;

    return (
        <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
};

export default CounterControls;