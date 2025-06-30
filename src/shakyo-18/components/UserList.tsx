import React from 'react';
import UserItem from './UserItem';
import { User } from '../types/User';

type Props = {
    users: User[];
    onToggle: (id: number) => void;
    filter?: string;
}

const UserList: React.FC<Props> = ({ users, onToggle, filter = '' }) => {
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul>
            {filteredUsers.map((user) => (
                <UserItem
                    key={user.id}
                    user={user}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    );
};

export default UserList;