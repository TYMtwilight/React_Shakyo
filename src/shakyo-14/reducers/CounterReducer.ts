import { CounterState, CounterAction } from "../types/counter";

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch(action.type) {
        case 'INCREMENT':
            return { count: state.count + 1};
        case 'DECREMENT':
            return { count: state.count - 1};
        default:
            return state;
    }
};