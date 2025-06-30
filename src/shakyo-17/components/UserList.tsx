import React from 'react';
import { User } from '../App';
import UserItem  from './UserItem';

type Props = {
    users: User[];
    favorites: number[];
    onToggle: (id: number) => void;
};

const UserList: React.FC<Props> = ({ users, favorites, onToggle}) => {
    return (
        <ul style={{ listStyle: 'none', padding: 0}}>
            {users.map((user)=>(
                <UserItem 
                    key={user.id}
                    user={user}
                    active={favorites.includes(user.id)}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    );
};

export default UserList;