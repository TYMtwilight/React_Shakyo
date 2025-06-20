import React, { createContext, useState, ReactNode } from 'react';

export type User = {
    id: number;
    name: string;
    age: number;
};

type FavoriteContextType = {
    favorites: User[];
    toggleFavorite: (user:User) => void;
};

export const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<User[]>([]);

    const toggleFavorite = (user: User) => {
        setFavorites((prev) => prev.some((u) => u.id === user.id)
            ? prev.filter((u) => u.id !== user.id)
            : [...prev, user]
        );
    };

    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite }} >
            {children}
        </FavoriteContext.Provider>
    );
};