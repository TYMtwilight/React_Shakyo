import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <header style={{ marginBottom: 20}}>
                <nav style={{ marginBottom: 20}}>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;