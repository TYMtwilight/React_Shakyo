import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const CounterDisplay: React.FC = () => {
    const ctx = useContext(CounterContext);
    if(!ctx) return null;  // Provider外なら何もしない

    return <h2>現在のカウント： {ctx.count}</h2>
};

export default CounterDisplay;