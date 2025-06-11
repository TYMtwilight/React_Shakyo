import React, { memo } from 'react';
import { User } from '../types/user';

type Props = {
    user: User;
    onToggle: (id: number) => void;
};

const UserItem: React.FC<Props> = memo(({ user, onToggle }) => {
    const { id, name, active } = user;

    return (
        <li style={{
            color: active ? 'green' : 'gray',
            cursor: 'pointer'
        }} onClick={() => onToggle(id)}>
            {name} {active ? '(active)' : '(inactive)'}
        </li>
    );
});

export default UserItem;