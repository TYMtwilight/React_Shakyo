// トップページ用のコンポーネント
import React from "react";
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section>
            <h1>ホームページ</h1>
            <p>ここはトップページです。React Router の基本を学びましょう。</p>
            {/* ボタンをクリックするとプログラム的に遷移 */}
            <button onClick={() => navigate("/about")}>About へ移動</button>
        </section>
    );
};

export default Home;