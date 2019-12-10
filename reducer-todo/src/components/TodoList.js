import React from "react";
import { useTodoContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function TodoList() {
  const { todoState } = useTodoContext();

  return (
    <>
      <div>
        {todoState.map(todo => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </div>
      <div>
        <TodoForm />
      </div>
    </>
  );
}
