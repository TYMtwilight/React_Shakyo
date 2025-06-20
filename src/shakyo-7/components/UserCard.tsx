import React, { useContext } from 'react';
import { User, FavoriteContext } from '../context/FavoriteContext';

type Props = { user: User };

const UserCard: React.FC<Props> = ({ user }) => {
    const ctx = useContext(FavoriteContext);
    if(!ctx) return null;

    const { favorites, toggleFavorite } = ctx;
    const isFav = favorites.some((u) => u.id === user.id);

    return (
        <div
            style={{
                border: '1px solid #ccc',
                padding: 12,
                borderRadius: 6,
                width: 200,
            }}
        >
            <h4>{user.name}</h4>
            <p>年齢：{user.age}</p>
            <button onClick={()=>toggleFavorite(user)}>
                {isFav ? '★ お気に入り解除' : '☆ お気に入り'}
            </button>
        </div>
    );
};

export default UserCard;