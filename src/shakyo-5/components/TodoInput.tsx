import React, {useState, useContext } from 'react';
import { TodoDispatchContext } from '../context/TodoContext';

const TodoInput: React.FC = () => {
    const [text, setText] = useState('');
    const dispatch = useContext(TodoDispatchContext);

    const handleAdd = () => {
        if(text.trim() === '') return;
        dispatch({ type: 'ADD', payload: text});
        setText('');
    };

    return (
        <div style={{ marginBottom: 16 }}>
            <input 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="新しいタスク"
                style={{ padding: 6, width: 200}}
            />
            <button onClick={handleAdd} style={{ marginLeft: 8 }}>
                追加
            </button>
        </div>
    );
};

export default TodoInput;