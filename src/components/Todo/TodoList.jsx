import React from 'react';
import useTodos from './useTodos';
import useCategories from '../Categories/useCategories';

const TodoList = () => {
    const {
        todos,
        handleDeleteTodo,
        handleIsDone
    } = useTodos();
    const { getCategoryName } = useCategories();

    return (
        <ul>
            {todos.sort((a, b) => a.isDone - b.isDone).map((todo) => (
                <li key={todo.id} className={todo.isDone ? 'text-muted' : ''}>
                    {todo.name} {getCategoryName(todo.categoryId)} {todo.deadline.replace('T', ' ')}
                    <button type='button' style={{ marginLeft: '2rem' }}
                            onClick={() => handleDeleteTodo(todo.id)}>Видалити
                    </button>
                    <button type='button' disabled={todo.isDone} style={{ marginLeft: '2rem' }}
                            onClick={() => handleIsDone(todo.id)}>Виконати
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
