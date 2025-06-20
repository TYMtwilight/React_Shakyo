import React, { memo, useContext} from 'react';
import { BankStateContext } from '../context/BankContext';

const BalanceDisplay: React.FC = memo(() => {
    const { balance } = useContext(BankStateContext);
    return <h2>現在の残高： ¥{balance}</h2>;
});

export default BalanceDisplay;