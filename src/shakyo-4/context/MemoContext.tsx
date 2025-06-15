import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';

export type Memo = {
    id: number;
    text: string;
}

type Action = 
    { type: 'ADD'; payload: string} 
  | { type: 'DELETE'; payload: number};

const initialState: Memo[] = [];

const memoReducer = (state: Memo[], action: Action): Memo[] => {
    switch(action.type) {
        case 'ADD':
            return [...state, {id: Date.now(), text: action.payload }];
        case 'DELETE':
            return state.filter((memo) => memo.id !== action.payload);
        default:
            return state;
    }
};

export const MemoStateContext = createContext<Memo[]>([]);
export const MemoDispatchContext = createContext<Dispatch<Action>>(() => {});

export const MemoProvider = ({ children }: { children: ReactNode}) => {
    const [state, dispatch] = useReducer(memoReducer, initialState);

    return (
        <MemoStateContext.Provider value={state}>
            <MemoDispatchContext.Provider value={dispatch}>
                {children}
            </MemoDispatchContext.Provider>
        </MemoStateContext.Provider>
    );
};
