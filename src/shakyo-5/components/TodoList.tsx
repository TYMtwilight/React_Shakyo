import React, { useContext } from 'react';
import { TodoStateContext } from '../context/TodoContext';
import TodoItem from '../components/TodoItem';

const TodoList: React.FC = () => {
    const todos = useContext(TodoStateContext);

    if(todos.length === 0) return <p>タスクはありません。</p>

    return (
        <ul style={{ paddingLeft: 20 }}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;

