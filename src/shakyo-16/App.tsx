import React from "react";
import GreetingList from "./GreetingList";

type User = {
    id: number,
    name: string;
    isOnline: boolean;
};

const users:User[] = [
    {id: 1, name: "汪淼", isOnline: true},
    {id: 2, name: "揚冬", isOnline: false},
    {id: 3, name: "史強", isOnline: true},
];

const App: React.FC = () => (
    <div>
        <GreetingList users={users} title="三体"/>
    </div>
);

export default App;