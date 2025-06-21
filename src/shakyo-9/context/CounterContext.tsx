import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';

/* --------- 状態とアクションの型 --------- */
type State = { count: number };

type Action = { type: 'INCREMENT'} 
    | {type: 'DECREMENT'}
    | {type: 'RESET'};

/* --------- reducer関数 --------- */
const reducer = (state: State, action: Action): State => {
    switch(action.type) {
        case 'INCREMENT':
            return { count: state.count +1 };
        case 'DECREMENT':
            return { count: state.count -1 };
        case 'RESET':
            return { count: 0};
        default:
            return state;
    }
};

/* --------- Context作成 --------- */
const initialState: State = { count: 0 };

export const CounterStateContext = createContext<State>(initialState);
export const CounterDispatcherContext = createContext<Dispatch<Action>>(() => {});

/* --------- Provider --------- */
export const CounterProvider = ({ children } : { children: ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CounterStateContext.Provider value={state}>
            <CounterDispatcherContext.Provider value={dispatch}>
                {children}
            </CounterDispatcherContext.Provider>
        </CounterStateContext.Provider>
    )
}