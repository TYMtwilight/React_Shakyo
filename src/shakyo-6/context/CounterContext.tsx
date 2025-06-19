import React, { createContext, useState, ReactNode } from 'react';

/** Context に乗せるデータの型 */
type CounterContextType = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
};

/** createContext で箱を用意(undefinedを許容) */
export const CounterContext = createContext<CounterContextType | undefined>( undefined );

/** Provider: 子ツリー全体に count / setCount を配る */
export const CounterProvider = ({ children }: { children : ReactNode }) => {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{ count, setCount}}>
            { children }
        </CounterContext.Provider>
    );
};