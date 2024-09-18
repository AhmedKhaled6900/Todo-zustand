// app/page.tsx (main page in Next.js 14)
'use client'; // Client-side functionality

import { useState } from 'react';
import { useTodoStore } from './lib/store';
import TodoList from './components/todo';

export default function Home() {
  const [title, setTitle] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === '') return;
    addTodo(title);
    setTitle(''); // Clear the input field after adding
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your task"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <button
          type="submit"
          className="w-full p-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
      <TodoList />
     

    </div>
  );
}
