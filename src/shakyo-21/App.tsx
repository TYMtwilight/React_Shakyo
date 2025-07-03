import React from 'react';
import { CounterProvider } from './content/CounterContext';
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButtons';

const App: React.FC = () => {
    return (
        <CounterProvider>
            <div style={{ padding: 20 }}>
                <h1>Context + useReducer カウンター</h1>
                <CounterDisplay />
                <CounterButtons />
            </div>
        </CounterProvider>
    );
};

export default App;