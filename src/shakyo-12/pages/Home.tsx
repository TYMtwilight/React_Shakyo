import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section>
            <h1>Home</h1>
            <p>Welcome to the homepage.</p>
            <button onClick={() => navigate("/profile")}>Go to Profile</button>
        </section>
    );
};

export default Home;