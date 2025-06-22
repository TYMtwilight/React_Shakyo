// 画面上部に常に表示されるシンプルなナビゲーションバー。
// Link コンポーネントでページ遷移します。
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <nav style={{ display: "flex", gap: 16, marginBottom: 24}}>
            {/* NavLink は現在の URL とマッチしていると、active クラスが付与される */}
            <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
                Home
            </NavLink>
            <NavLink to="/about" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
                About
            </NavLink>
        </nav>
    )
}

export default NavBar;
