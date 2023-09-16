import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {},
    deleteTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
};