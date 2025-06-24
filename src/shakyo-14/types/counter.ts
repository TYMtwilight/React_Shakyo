export type CounterState = { count: number};

export type CounterAction = 
    | { type: 'INCREMENT' }
    | { type: 'DECREMENT' };