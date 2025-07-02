import React from 'react';
import { Memo } from '../types/Memo';

type Props = {
    memos: Memo[];
};

const MemoList: React.FC<Props> = ({ memos }) => {
    return <div>
        {
            memos.length === 0 ?
                <p>登録されているメモがありません</p>
                :
                <ul style={{padding: 5}}>
                    { memos.map((memo) => (
                        <li key={memo.id} style={{ border: 1}}>
                            {memo.content}
                        </li>
                    ))}
                </ul>
        }
    </div>
};

export default MemoList;