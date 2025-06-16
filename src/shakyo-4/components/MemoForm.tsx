import React, { useState, useContext } from 'react';
import { MemoDispatchContext } from '../context/MemoContext';

const MemoForm: React.FC = () => {
    const [text, setText] = useState("");
    const dispatch = useContext( MemoDispatchContext );

    const handleAdd = () => {
        if(text.trim() === '') return;
        dispatch({ type: 'ADD', payload: text});
        setText("");
    }

    return (
        <div>
            <textarea
                style={{width: '100%', height: '60px', padding: 8}}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="メモを入力"
            />
            <button
                onClick={handleAdd}
                style={{
                    marginTop: 8,
                    padding: '8px 12px',
                    backgroundColor: '#4caf50',
                    color: 'white',
                    border: 'none',
                    borderRadius: 4,
                    cursor: 'pointer',
                }}
            >
                追加
            </button>
        </div>
    );
};

export default MemoForm;
