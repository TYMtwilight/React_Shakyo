import React from 'react';
import { MemoProvider } from './context/MemoContext';
import MemoForm from './components/MemoForm';
import MemoList from './components/MemoList';

const App: React.FC = () => {
    return (
        <MemoProvider>
            <div style={{ padding: 20 }}>
                <h1>グローバルメモアプリ(Context管理)</h1>
                <MemoForm />
                <MemoList />
            </div>
        </MemoProvider>
    );
};

export default App;