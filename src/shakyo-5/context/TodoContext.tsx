import React, { createContext, useReducer, Dispatch, ReactNode } from 'react';
import { Todo } from "../types/Todo";

/** Action の型(ユニオン型) */
type Action = { type: 'ADD'; payload: string}
    | { type: 'TOGGLE'; payload: number }
    | { type: 'REMOVE'; payload: number };

/** reducer: 状態をどう変えるかを定義 */ 
const todoReducer = (state: Todo[], action: Action): Todo[] => {
    switch(action.type) {
        case 'ADD':
            return [...state, { id: Date.now(), text: action.payload, done: false}];
        case 'TOGGLE':
            return state.map((t) => 
                t.id === action.payload ? { ...t, done: !t.done} : t
            );
        case 'REMOVE':
            return state.filter((t) => t.id !== action.payload);
        default:
            return state;
    }
};

/** Context を作成(初期値はダミー) */
export const TodoStateContext = createContext<Todo[]>([]);
export const TodoDispatchContext = createContext<Dispatch<Action>>(() => {});

/** Provider: 子ツリーに state / dispatch を配布 */
export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(todoReducer, []);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
};

    