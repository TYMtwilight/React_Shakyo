import React, { useEffect, useState, useCallback } from 'react';
import UserList from './components/UserList';
import { User } from './types/user';

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [filter, setFilter] = useState<string>('');

    const handleToggleActive = useCallback((id: number) => {
        setUsers((prev) => 
            prev.map((user) => 
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    }, []);

    useEffect(() => {
        const initialUsers: User[] = [
            { id: 1, name: 'Alice', active: true },
            { id: 2, name: 'Bob', active: false },
            { id: 3, name: 'Charlie', active: true },
        ];
        setUsers(initialUsers);
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>ユーザー一覧</h1>
            <input
                type="text" 
                placeholder="名前で検索"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{ marginBottom: '10px'}}
            />
            <UserList users={users} onToggle={handleToggleActive} filter={filter} />
        </div>
    )
}

export default App;