
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import toast, { Toaster } from 'react-hot-toast';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
    addTodo: (title: string) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    clearTodos: () => void;
    clearCompletedTodos: () => void;
}

export const useTodoStore = create<TodoState>()(
    persist(
        (set, get) => ({
            todos: [],
            addTodo: (title: string) => {
                set((state) => ({
                    todos: [
                        ...state.todos,
                        { id: Date.now(), title, completed: false },
                    ],
                }));
                toast.success("Todo added");
            },
            removeTodo: (id: number) => {
                set((state) => ({
                    todos: state.todos.filter((todo) => todo.id !== id),
                }));
                toast.success("Todo deleted");
            },
            toggleTodo: (id: number) =>
                set((state) => ({
                    todos: state.todos.map((todo) =>
                        todo.id === id
                            ? { ...todo, completed: !todo.completed }
                            : todo
                    ),
                })),
            clearTodos: () => {
                const { todos } = get();
                if (todos.length === 0) {
                    toast.error("No todos to clear");
                } else {
                    set({ todos: [] });
                    toast.success("All todos cleared");
                }
            },
            clearCompletedTodos: () => {
                const { todos } = get(); // Get current state
                const hasCompletedTodos = todos.some((todo) => todo.completed);

                if (hasCompletedTodos) {
                    set((state) => ({
                        todos: state.todos.filter((todo) => !todo.completed),
                    }));
                    toast.success("Completed todos cleared");
                } else {
                    toast.error("No completed todos to clear");
                }
            },
        }),
        {
            name: 'todo-storage', // Key name in localStorage
            storage: createJSONStorage(() => localStorage), // Use JSON storage with localStorage
        }
    )
);
