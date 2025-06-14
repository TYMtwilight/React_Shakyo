import React, { useEffect, useState, useCallback } from "react";
import Tabs from './components/Tabs';
import MemoEditor from "./components/MemoEditor";
import MemoList from "./components/MemoList";
import { Memo } from "./types/Memo";

const CATEGORIES = ['日記', '仕事', '買い物'];



const App: React.FC = () => {
    const [memos, setMemos] = useState<Memo[]>([]);
    const [activeTab, setActiveTab] = useState<string>('日記');
    const [text, setText] = useState("");

    useEffect(()=>{
        const initialMemos: Memo[] = [
            { id: 1, category: '日記', content: '今日は天気がいい。'},
            { id: 2, category: '仕事', content: 'メール対応をした。'},
        ];
        setMemos(initialMemos);
    },[]);

    const handleAddMemo = useCallback(() => {
        if(text.trim() === '') return;
        const newMemo: Memo = {
            id: Date.now(),
            category: activeTab,
            content: text,
        };
        setMemos((prev) => [...prev, newMemo]);
        setText('');
    },[text, activeTab]);

    const handleTabChange = useCallback((category: string) => {
        setActiveTab(category);
    }, []);

    const filteredMemos = memos.filter((m) => m.category === activeTab);

    return (
        <div style={{ padding: 20 }}>
            <h1>タブ付きメモアプリ</h1>
            <Tabs
                categories={CATEGORIES}
                active={activeTab}
                onChange={handleTabChange}
            />
            <MemoEditor text={text} onChange={setText} onAdd={handleAddMemo} />
            <MemoList memos={filteredMemos} />
        </div>
    )
}

export default App;