import React from "react";
import { useTodoContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todoState, todoDispatch] = useTodoContext();

  return (
    <div>
      {todoState.map(todo => {
        return <TodoItem todo={todo} />;
      })}
    </div>
  );
}
