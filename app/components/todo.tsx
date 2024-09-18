
import  { useState } from 'react';
import { useTodoStore } from '../lib/store';
import { FaRegTrashAlt } from 'react-icons/fa';
import ConfirmModal from  './confirm-modal';
import toast from 'react-hot-toast';

const TodoList = () => {
  const { todos, addTodo, removeTodo, toggleTodo, clearTodos, clearCompletedTodos } = useTodoStore();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState<() => void>(() => () => {});
  const [message, setMessage] = useState<string>('');

  const handleDelete = (action: () => void, message: string) => {
    setMessage(message);
    setConfirmAction(() => action);
    setIsConfirmOpen(true);
  };

  const handleClearTodos = () => {
    if (todos.length === 0) {
      toast.error('No todos to clear');
    } else {
      handleDelete(clearTodos, 'Are you sure you want to clear all todos?');
    }
  };

  const handleClearCompletedTodos = () => {
    const hasCompletedTodos = todos.some(todo => todo.completed);

    if (!hasCompletedTodos) {
      toast.error('No completed todos to clear');
    } else {
      handleDelete(clearCompletedTodos, 'Are you sure you want to clear completed todos?');
    }
  };

  return (
    <>
      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={() => {
          confirmAction();
          setIsConfirmOpen(false);
        }}
        message={message}
      />
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
                onClick={() => handleDelete(() => removeTodo(todo.id), 'Are you sure you want to delete this todo?')}
              >
                <FaRegTrashAlt size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex gap-4">
        <button
          className="flex items-center justify-center text-center gap-2 p-1 bg-red-500 text-white rounded"
          onClick={handleClearTodos}
        >
          <FaRegTrashAlt size={20} /> All
        </button>
        <button
          className="flex items-center gap-2 p-1 bg-red-500 text-white rounded"
          onClick={handleClearCompletedTodos}
        >
          <FaRegTrashAlt size={20} /> Completed
        </button>
      </div>
    </>
  );
};

export default TodoList;
