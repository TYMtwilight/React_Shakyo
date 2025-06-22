// About ページ用のコンポーネント
import React, { useEffect } from 'react';

const About: React.FC = () => {
    // ページマウント時の副作用: タイトルを変更
    useEffect(() => {
        document.title = "About Page";
        return () => {
            document.title = "React Router Sample"; // クリーンアップ時に戻す
        };
    }, []);

    return (
        <section>
            <h1>About ページ</h1>
            <p>React Router v6 の最小構成サンプルです</p>
        </section>
    );
};

export default About;