import React, { memo, useContext } from 'react';
import { BankStateContext } from '../context/BankContext';

const HistoryList: React.FC = memo(() => {
    const { history } = useContext(BankStateContext);

    if(history.length === 0) return <p>取引履歴はありません</p>;

    return (
        <ul style={{ marginTop: 9}}>
            {history.map((t) => (
                <li key={t.id}>
                    {new Date(t.timestamp).toLocaleDateString()}:
                    {t.amount > 0 ? '入金' : '出金'} ¥{Math.abs(t.amount)}
                </li>
            ))}
        </ul>
    );
});

export default HistoryList;