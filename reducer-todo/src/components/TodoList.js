import React from "react";
import { useTodoContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function TodoList() {
  const { todoState, todoDispatch } = useTodoContext();

  function canClearShow() {
    return 0 < todoState.filter(item => item.completed).length;
  }

  return (
    <>
      <div>
        {todoState.map(todo => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </div>
      {canClearShow() && (
        <button
          type="button"
          onClick={() => {
            todoDispatch({ type: "CLEAR_TODO" });
          }}
        >
          clear completed
        </button>
      )}
      <div>
        <TodoForm />
      </div>
    </>
  );
}
