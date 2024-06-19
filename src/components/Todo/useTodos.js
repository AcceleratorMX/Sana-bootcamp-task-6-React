import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo, isDone } from "../../redux/actions/todos";

const useTodos = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    const [todo, setTodo] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleAddTodo = () => {
        if (todo && selectedCategory) {
            dispatch(addTodo({ name: todo, categoryId: +selectedCategory, deadline }));
            setTodo('');
            setSelectedCategory('');
            setDeadline('');
        }
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo({ id }));
    };

    const handleIsDone = (id) => {
        dispatch(isDone({ id }));
    };

    return {
        todos,
        todo,
        setTodo,
        selectedCategory,
        setSelectedCategory,
        deadline,
        setDeadline,
        handleAddTodo,
        handleDeleteTodo,
        handleIsDone
    };
};

export default useTodos;
