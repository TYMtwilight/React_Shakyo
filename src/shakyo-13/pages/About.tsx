import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "About Page";
        return(() => {
            document.title= "React App";
        });
    },[])

    return (
        <div>
            <h1>About Page</h1>
            <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
    );
};

export default About;