import React from "react";
import { useTodoContext } from "../contexts/TodoContext";

export default function TodoItem({ todo }) {
  const { todoDispatch } = useTodoContext();
  return (
    <div style={{ display: "flex" }}>
      <div className={todo.completed ? "completed" : null}>
        Task: {todo.item}
      </div>
      <button
        onClick={() => todoDispatch({ type: "TOGGLE_TODO", payload: todo.id })}
        type="button"
      >
        {todo.completed ? "incomplete" : "complete"}
      </button>
    </div>
  );
}
