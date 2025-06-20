import React from 'react';
import { FavoriteProvider } from './context/FavoriteContext';
import UserList from './components/UserList';
import FaboriteSummary from './components/FavoriteSummary';

const App: React.FC = () => (
    <FavoriteProvider>
        <div style={{ padding: 20}}>
            <h1>ユーザーお気に入り管理(Context + useState)</h1>
            <UserList/>
            <FaboriteSummary/>
        </div>
    </FavoriteProvider>
);

export default App;