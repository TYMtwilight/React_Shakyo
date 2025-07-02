import React, { useState, useEffect, useCallback } from 'react';
import MemoEditor from './components/MemoEditor';
import MemoList from './components/MemoList';
import Tabs from './components/Tabs';
import { Memo } from './types/Memo';

const App: React.FC = () => {
    const CATEGORIES = ["日記", "仕事", "買い物"];
    
    const [memos, setMemos] = useState<Memo[]>([]);
    const [activeTab, setActiveTab] = useState<string>("日記");
    const [text, setText] = useState<string>("");
 
    useEffect(() => {
        const initialMemos: Memo[] = [
            { id: 1, category: '日記', content: '今日は天気がいい。'},
            { id: 2, category: '仕事', content: 'メール対応をした。'},
        ];
        setMemos(initialMemos);
    }, []);

    const handleAddMemo = useCallback(() => {
        if(text.trim() === "") {
            return;
        }
        const newMemo = {
            id: Date.now(),
            category: activeTab,
            content: text,
        };
        setMemos((prev) => [...prev, newMemo]);
        setText("");
    }, [text, setActiveTab]);

    const handleTabChange = useCallback((tab: string) => {
        setActiveTab(tab);
    }, []);

    const filteredMemos = memos.filter((memo) => memo.category === activeTab);

    return (
        <div style={{padding: 5}}>
            <h1>タブ付きメモアプリ</h1>
            <MemoEditor text={text} onChange={setText} onAdd={handleAddMemo} />
            <Tabs categories={CATEGORIES} active={activeTab} onChange={handleTabChange} />
            <MemoList memos={filteredMemos}/>
        </div>
    )
}

export default App;

