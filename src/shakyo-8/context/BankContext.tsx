import React, {
    createContext,
    useReducer,
    ReactNode,
    Dispatch,
    useEffect
} from 'react';

/* ---------- 型定義 ---------- */
export type Txn = {
    id: number;
    amount: number;     // +: 入金  -: 出金
    timestamp: number;  // epoch
}

type State = {
    balance: number;
    history: Txn[];
};

type Action = 
    | {type: 'DEPOSIT'; payload: number}
    | {type: 'WITHDRAW'; payload: number}
    | {type: 'RESET'};

/* ---------- reducer ---------- */
const reducer = (state: State, action: Action):State => {
    switch(action.type) {
        case 'DEPOSIT':
            return {
                balance: state.balance + action.payload,
                history:[
                    { id: Date.now(), amount: action.payload, timestamp: Date.now() },
                    ...state.history,
                ],
            };
        case 'WITHDRAW':
            return {
                balance: state.balance - action.payload,
                history:[
                    { id: Date.now(), amount: -action.payload, timestamp: Date.now() },
                    ...state.history,
                ],
            };
        case 'RESET':
            return { balance: 0, history: [] };
        default:
            return state;
    }
};

/* ---------- Context ---------- */
const init: State = { balance: 0, history: [] };

export const BankStateContext = createContext<State>(init);
export const BankDispatchContext = createContext<Dispatch<Action>>(() => {});

/* ---------- Provider ---------- */
export const BankProvider = ({ children } : { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, init);

    /* useEffect: 残高をタイトルに反映 */
    useEffect(() => {
        document.title = `残高 ¥${state.balance}`;
    }, [state.balance]);

    return (
        <BankStateContext.Provider value={state}>
            <BankDispatchContext.Provider value={dispatch}>
                {children}
            </BankDispatchContext.Provider>
        </BankStateContext.Provider>
    );
};