import React from 'react';
import { BankProvider } from './context/BankContext';
import BalanceDisplay from './components/BalanceDisplay';
import TransactionButtons from './components/TransactionButtons';
import HistoryList from './components/History';

const App: React.FC = () => (
    <BankProvider>
        <div style={{ padding: 20}}>
            <h1>簡易バンク(Context + useReducer)</h1>
            <BalanceDisplay />
            <TransactionButtons />
            <HistoryList />
        </div>
    </BankProvider>
);

export default App;
