import React, { useContext, useCallback } from 'react';
import { BankDispatchContext } from '../context/BankContext';

const TransactionButtons: React.FC = () => {
    const dispatch = useContext(BankDispatchContext);

    /* useCallback でハンドラをメモ化 */
    const deposit = useCallback(
        (amt: number) => dispatch({ type: 'DEPOSIT', payload: amt}),
        [dispatch]
    );
    const withdraw = useCallback(
        (amt: number) => dispatch({ type: 'WITHDRAW', payload: amt}),
        [dispatch]
    );

    return (
        <div style={{ display: 'flex', gap: 8, marginBottom: 16}}>
            <button onClick={() => deposit(1000)}>+1000</button>
            <button onClick={() => withdraw(500)}>-500</button>
            <button onClick={() => dispatch({ type: 'RESET'})}>リセット</button>
        </div>
    );
};

export default TransactionButtons;