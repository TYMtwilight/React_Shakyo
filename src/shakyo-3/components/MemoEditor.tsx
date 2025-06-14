import React from 'react';

type Props = {
    text: string;
    onChange: (value: string) => void;
    onAdd: () => void;
};

const MemoEditor: React.FC<Props> = ({ text, onChange, onAdd}) => {
    return (
        <div style={{ marginBottom: 16 }}>
            <textarea 
                style={{ width: '100%', height: '60px', padding: 8}}
                value={text}
                onChange={(e) => onChange(e.target.value)}
                placeholder="メモを入力...."
            />
            <button
                onClick={onAdd}
                style={{
                    marginTop: 8,
                    backgroundColor: '#2196f3',
                    color: 'white',
                    border: 'none',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    borderRadius: 4,
                }}
            >
                メモを追加
            </button>
        </div>
    );
};

export default MemoEditor;