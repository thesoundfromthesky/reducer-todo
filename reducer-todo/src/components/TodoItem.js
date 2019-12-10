import React from "react";

export default function TodoItem({ todo }) {
  return (
    <div>
      <div>Task: {todo.item}</div>
    </div>
  );
}
