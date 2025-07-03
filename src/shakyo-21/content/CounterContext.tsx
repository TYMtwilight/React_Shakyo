import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';  

// 状態の型
type State = { count: number };

// アクションの型
type Action = 
    | { type: 'INCREMENT' }
    | { type: 'DECREMENT' }
    | { type: 'RESET' };

// 初期状態
const initialState: State = { count: 0 };

// reducer関数：状態とアクションから新しい状態を返す
const reducer = (state: State, action: Action): State => {
    switch(action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    };
};

// Contextの作成（初期値は undefined にして後で Provider で供給）
export const CounterStateContext = createContext<State | undefined>(undefined);
export const CounterDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

// Providerコンポーネント：App全体を包んで context を提供
export const CounterProvider = ({ children } : { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CounterStateContext.Provider value={state}>
            <CounterDispatchContext.Provider value={dispatch}>
                {children}
            </CounterDispatchContext.Provider>
        </CounterStateContext.Provider>
    );
};