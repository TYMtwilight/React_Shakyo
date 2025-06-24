import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App:React.FC = () => {
    return (
        <BrowserRouter>
            <header>
                <nav style={{ display: "flex", gap: "1rem" }}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
            </header>
            <Routes>
                {/* "/" にアクセスしたら Home を表示 */}
                <Route path="/" element={<Home />} />
                {/* "/about" にアクセスしたら About を表示 */}
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;