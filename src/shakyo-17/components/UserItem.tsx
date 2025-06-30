import React from 'react';
import { User } from '../App';

type Props = {
    user: User;
    active: boolean;
    onToggle: (id: number) => void;
};

const UserItem: React.FC<Props> = ({ user, active, onToggle }) => {
    return (
        <li
            style={{
                marginBottom: 8,
                color: active ? 'green' : 'black',
                fontWeight: active ? 'bold' : 'normal',
                cursor: 'pointer',
            }}
            onClick={() => onToggle(user.id)}
        >
            {user.name}({user.job})
        </li>
    );
};

export default UserItem;