import React, { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';

const FaboriteSummary: React.FC = () => {
    const ctx = useContext(FavoriteContext);
    if(!ctx) return null;

    const { favorites } = ctx;

    return (
        <div style={{ marginTop: 24}}>
            <h3>お気に入り一覧 ({favorites.length}件) </h3>
            {favorites.length === 0 ? (
                <p>まだお気に入りが登録されていません。</p>
            ) : (
                <ul>
                    {favorites.map((u) => (
                        <li key={u.id}>{u.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FaboriteSummary;