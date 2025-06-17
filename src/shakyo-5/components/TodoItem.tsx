import React, { memo, useContext } from 'react';
import { TodoDispatchContext } from '../context/TodoContext';
import { Todo } from '../types/Todo';

type Props = {
    todo: Todo;
};

const TodoItem: React.FC<Props> = memo(({todo}) => {
    const dispatch = useContext(TodoDispatchContext);

    return (
        <li style={{ marginBottom: 6 }}>
            <span
                onClick={() => dispatch({ type: 'TOGGLE', payload: todo.id })}
                style={{
                    cursor: 'pointer',
                    textDecoration: todo.done ? 'line-through' : 'none',
                }}
            >
                {todo.text}
            </span>
            <button
                onClick={() => dispatch({ type: 'REMOVE', payload: todo.id})}
                style={{ marginLeft: 8 }}
            >
                削除
            </button>
        </li>
    );
});

export default TodoItem;