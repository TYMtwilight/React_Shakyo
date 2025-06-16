import React, { useContext } from 'react';
import { MemoStateContext, MemoDispatchContext } from '../context/MemoContext';

const MemoList: React.FC = () => {
    const memos = useContext(MemoStateContext);
    const dispatch = useContext(MemoDispatchContext);

    if(memos.length === 0) return  <p>メモはまだありません。</p>

    return (
        <ul>
            {memos.map((memo) => (
                <li
                    key={memo.id}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '6px 0',
                        borderBottom: '1px solid #ddd',
                    }}
                >
                    <span>{memo.text}</span>
                    <button onClick={() => dispatch({ type: 'DELETE', payload: memo.id })}
                            style={{
                                background: 'crimson',
                                border: 'none',
                                padding: '4px 8px',
                                cursor: 'pointer',
                                borderRadius: 4,
                                color: 'white',
                            }}
                    >
                        削除
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default MemoList;