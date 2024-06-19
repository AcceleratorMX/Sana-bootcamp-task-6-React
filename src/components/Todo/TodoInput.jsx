import React from 'react';
import useTodos from './useTodos';
import useCategories from '../Categories/useCategories';

const TodoInput = () => {
    const {
        todo,
        setTodo,
        selectedCategory,
        setSelectedCategory,
        deadline,
        setDeadline,
        handleAddTodo
    } = useTodos();
    const { categories } = useCategories();

    const getOnKeyDownEnter = (handleAddTodo) =>
        e => e.key === 'Enter' ? handleAddTodo() : '';

    return (
        <div onKeyDown={getOnKeyDownEnter(handleAddTodo)}>
            <input
                type="datetime-local"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
            />
            <input value={todo} type="text" onChange={(e) => setTodo(e.target.value)} />
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="" hidden>Категорія</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <button type='button' onClick={handleAddTodo}>Додати</button>
        </div>
    );
};

export default TodoInput;
