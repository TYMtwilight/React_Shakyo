import React from 'react';
import { CounterProvider } from './context/CounterContext';
import CounterDisplay from './components/CounterDisplay';
import CounterControls from './components/CounterControls';

const App: React.FC = () => (
    <CounterProvider>
        <div style={{ padding: 20}}>
            <h1>グローバルカウンター (Context + useState)</h1>
            <CounterDisplay />
            <CounterControls />
        </div>
    </CounterProvider>
);

export default App;