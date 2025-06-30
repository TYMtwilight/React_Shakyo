import React, { useState } from 'react';
import UserList from './components/UserList';
import FilterToggle from './components/FilterToggle';

// ユーザーの型定義
export type User = {
    id: number;
    name: string;
    job: string;
};

const initialUsers: User[] = [
    { id: 1, name: '佐藤', job: 'エンジニア' },
    { id: 2, name: '鈴木', job: 'デザイナー' },
    { id: 3, name: '高橋', job: 'マーケター' },
];

const App: React.FC = () => {
    const [favorites, setFavorites] = useState<number[]>([]);  // お気に入りのID
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

    const toggleFavorite = (id: number) => {
        setFavorites((prev) => 
            prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
        );
    };

    const filteredUsers = showOnlyFavorites ?
        initialUsers.filter((user) => favorites.includes(user.id))
        : initialUsers;

    return (
        <div style={{ padding: 20 }}>
            <h1>ユーザー一覧</h1>
            <FilterToggle
                checked={showOnlyFavorites}
                onChange={() => setShowOnlyFavorites((prev) => !prev)}
            />
            <UserList users={filteredUsers} favorites={favorites} onToggle={toggleFavorite} />
        </div>
    );
};

export default App;