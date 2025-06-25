import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App: React.FC = () => (
    <TodoProvider>
        <div style={{ padding: 20 }}>
            <h1>Todoアプリ(Context + useReducer)</h1>
            <TodoInput />
            <TodoList />
        </div>
    </TodoProvider>
)

export default App;