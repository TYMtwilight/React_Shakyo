import React, { useContext } from 'react';
import { CounterStateContext } from '../content/CounterContext';

const CounterDisplay: React.FC = () => {
    const state = useContext(CounterStateContext);

    if(!state) return <p>Contextが見つかりません</p>

    return <h2>現在のカウント： {state.count}</h2>
};

export default CounterDisplay;