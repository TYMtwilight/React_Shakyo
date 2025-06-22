// ルーティングの中心。BrowserRouter でアプリ全体を包み、
// Routes と Route で URL とページコンポーネントを対応させます。
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';

const App: React.FC = () => {
    return (
        // BrowserRouter が History API を使って URL変更を検知します。
        <BrowserRouter>
            {/* どのページでも共通で表示したいナビゲーションバー */}
            <NavBar />
            {/* Routes 配下に複数の Route を並べます */}
            <Routes>
                {/* path が "/" にマッチしたら Home コンポーネントを表示 */}
                <Route path="/" element={<Home />} />
                {/* path が "/about" にマッチしたら About コンポーネントを表示 */}
                <Route path="/about" element={<About />} />
                {/* 存在しない URL のときのフォールバック */}
                <Route path="*" element={<h2>404: ページが見つかりません</h2>} />
            </Routes> 
        </BrowserRouter>
    );
};

export default App;