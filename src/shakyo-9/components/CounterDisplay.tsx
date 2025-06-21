import React, { useContext, memo } from 'react';
import { CounterStateContext } from '../context/CounterContext';

const CounterDisplay: React.FC = memo(() => {
    const { count } = useContext(CounterStateContext);
    return <h2>現在のカウント: { count }</h2>;
});

export default CounterDisplay;