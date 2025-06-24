import React from "react";
import { CounterProvider } from "./context/CounterContext";
import CounterDisplay from "./components/CounterDisplay";
import CounterButtons from "./components/CounterButtons";

const App = () => {
    return (
        <CounterProvider>
            <CounterDisplay />
            <CounterButtons />
        </CounterProvider>
    );
};

export default App;