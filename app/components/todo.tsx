// components/TodoList.tsx

import { useTodoStore } from "../lib/store";
import { FaRegTrashAlt } from "react-icons/fa";
<FaRegTrashAlt />
const TodoList = () => {
    const { todos, addTodo, removeTodo, toggleTodo, clearTodos, clearCompletedTodos } = useTodoStore();
    return (
        <>
            <div>
                {todos.length === 0 && <p>No tasks added yet.</p>}
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id} className="flex justify-between items-center mt-5">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                                    className="mr-2"
                                />
                                <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                                    {todo.title}
                                </span>
                            </div>
                            <button
                                className="ml-4 p-1 bg-red-500 text-white rounded"
                                onClick={() => removeTodo(todo.id)}
                            >
                                <FaRegTrashAlt size={20} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className=" mt-5 flex gap-4">
                <button className=" flex items-center justify-center text-center gap-2 p-1 bg-red-500 text-white rounded"
                    onClick={clearTodos}><FaRegTrashAlt size={20} />
                    All
                </button>
                <button className=" flex items-center gap-2 p-1 bg-red-500 text-white rounded"
                    onClick={clearCompletedTodos}><FaRegTrashAlt size={20} /> Completed </button>
            </div>

        </>
    );
};

export default TodoList;
