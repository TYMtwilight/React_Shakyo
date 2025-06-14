import React from 'react';
import { Memo } from '../types/Memo';

type Props = {
    memos: Memo[];
};

const MemoList: React.FC<Props> = ({ memos }) => {
    if(memos.length === 0) {
        return <p>メモはまだありません。</p>;
    }

    return (
        <ul>
            {memos.map(({id, content}) => (
                <li key={id} style={{ padding: '6px 0', borderBottom: '1px solid #ccc'}}>
                    {content}
                </li>
            ))}
        </ul>
    )
}

export default MemoList;