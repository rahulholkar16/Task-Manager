import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Add your task for the day..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 py-1.5 bg-[#5C605E] text-white"
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-[#3C966E] text-white shrink-0"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm;
