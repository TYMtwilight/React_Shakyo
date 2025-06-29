import React from "react";

type User = {
    id: number,
    name: string;
    isOnline: boolean;
};

type Props = {
    users: User[];
    title?: string;
};

const GreetingList: React.FC<Props> = ({users, title="ユーザー一覧"}) => {
    const onlineUsers = users.filter((user) => user.isOnline === true);

    return (
        <section>
            <h2 style={{ marginLeft: 20 }}>{title}</h2>
            <ul>
                {onlineUsers.map((onlineUser) => (
                    <li key={onlineUser.id}>
                        {onlineUser.name}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default GreetingList;