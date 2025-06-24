import React, { createContext, useReducer, ReactNode, Dispatch } from "react";
import { counterReducer } from "../reducers/CounterReducer";
import { CounterState, CounterAction } from "../types/counter";

const initialState: CounterState = { count: 0 };

export const CounterStateContext = createContext<CounterState | undefined>(undefined);
export const CounterDispatchContext = createContext<Dispatch<CounterAction> | undefined>(undefined);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <CounterStateContext.Provider value={state}>
            <CounterDispatchContext.Provider value={dispatch}>
                {children}
            </CounterDispatchContext.Provider>
        </CounterStateContext.Provider>
    )
}