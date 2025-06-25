import React, { createContext, useReducer, Dispatch, ReactNode } from 'react';

/** Todo型：各タスクの情報 */
export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

/** Action型：状態を更新するための指示（3種類） */
type Action = 
    | { type: 'ADD', payload: string }
    | { type: 'TOGGLE', payload: number }
    | { type: 'REMOVE', payload: number };

/** reducer関数：状態の変化を記述 */
const todoReducer = (state: Todo[], action: Action): Todo[] => {
    switch(action.type) {
        case 'ADD':
            return [...state, { id: Date.now(), text: action.payload, done: false }];
        case 'TOGGLE':
            return state.map((t) => 
                t.id === action.payload ? {...t, done: !t.done} : t
            );
        case 'REMOVE':
            return state.filter((t) => t.id !== action.payload);
        default:
            return state;
    }
};

// Contextを作成(ダミー値を使って初期化)
export const TodoStateContext = createContext<Todo[]>([]);
export const TodoDispatchContext = createContext<Dispatch<Action>>(() => {});

// Providerコンポーネント：状態とdispatchを配布する
export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(todoReducer, []);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                { children }
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
};