import React from 'react';

type Props = {
    text: string;
    onChange: (input: string) => void;
    onAdd: () => void;
};

const MemoEditor: React.FC<Props> = ({text, onChange, onAdd}) => {
    return (
        <div style={{marginBottom: 16}}>
            <textarea 
                style={{width: 400, height: 200, padding: 5}}
                value={text}
                onChange={(e) => onChange(e.target.value)}
                placeholder="メモを入力してください。"
            />
            <button 
                style={{backgroundColor: "darkgreen", color: "white", padding: 3, border: 1, cursor: "pointer"}} 
                onClick={onAdd}
            >
                メモを追加
            </button>
        </div>
    );
};

export default MemoEditor;