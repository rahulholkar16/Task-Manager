import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  const handleEdit = () => {
    if (todo.completed) return;

    if (isTodoEditable) {
      updateTodo(todo.id, { ...todo, todo: todoMsg });
      setIsTodoEditable(false);
    } else {
      setIsTodoEditable((prev) => !prev);
    }
  };

  const buttonProps = {
    className: "inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0",
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <button
        {...buttonProps}
        onClick={handleEdit}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      
      <TodoButton
        {...buttonProps}
        onClick={() => deleteTodo(todo.id)}
        label="❌"
        disabled={false} // The delete button is always enabled
      />
    </div>
  );
}

function TodoButton({ className, onClick, label, disabled }) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default TodoItem;
