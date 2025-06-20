import React from 'react';
import UserCard from './UserCard';
import { User } from '../context/FavoriteContext';

const USERS: User[] = [
    {id: 1, name: '佐藤 花子', age: 28},
    {id: 2, name: '鈴木 太郎', age: 35},
    {id: 3, name: '田中 次郎', age: 22},
];

const UserList: React.FC = () => (
    <div style={{ display: 'flex', gap: 12}}>
        {USERS.map((user) => (
            <UserCard key={user.id} user={user} />
        ))}
    </div>
);

export default UserList;