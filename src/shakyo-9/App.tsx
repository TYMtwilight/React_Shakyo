import React from 'react';
import { CounterProvider } from './context/CounterContext';
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButtons';

const App: React.FC = () => (
    <CounterProvider>
        <div style={{ padding: 20}}>
            <h1>グローバルカウンター(Context + useReducer)</h1>
            <CounterDisplay />
            <CounterButtons />
        </div>
    </CounterProvider>
);

export default App;