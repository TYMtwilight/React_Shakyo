import React, { useEffect } from "react";

const Profile: React.FC = () => {
    useEffect(() => {
        document.title = "Profile Page";
        return () => {
            document.title = "React App";
        };
    }, []);

    return (
        <section>
            <h1>Profile</h1>
            <p>This is your profile page.</p>
        </section>
    );
};

export default Profile;