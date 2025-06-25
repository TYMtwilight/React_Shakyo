import React, { useState, useContext } from 'react';
import { TodoDispatchContext } from '../context/TodoContext'; 

const TodoInput: React.FC = () => {
    const [text, setText] = useState("");
    const dispatch = useContext(TodoDispatchContext);  // dispatch関数を取得

    const handleAdd = () => {
        if(text.trim() === "") return; // 空文字チェック
        dispatch({ type: 'ADD', payload: text}); // タスクを追加　
        setText(""); // 入力欄をリセット
    };

    return (
        <div style= {{ marginBottom: 16 }}>
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="新しいタスク"
                style={{ padding: 6, width: 200}}
            />
            <button onClick={handleAdd} style={{ marginLeft: 8}}>
                追加
            </button>
        </div>
    );
};

export default TodoInput;