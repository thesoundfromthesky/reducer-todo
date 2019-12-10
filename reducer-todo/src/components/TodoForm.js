import React, { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

export default function TodoForm() {
  const { todoDispatch } = useTodoContext();
  const initialForm = { item: "" };
  const [form, setForm] = useState(initialForm);
  function handleSubmit(ev) {
    ev.preventDefault();

    for (const formControl in form) {
      if (form[formControl] === "") return;
    }
    
    const action = {};
    action.type = "ADD_TODO";
    action.payload = { ...form, completed: false, id: Date.now() };
    todoDispatch(action);

    setForm(initialForm);
  }
  function handleChange(ev) {
    setForm({ [ev.target.name]: ev.target.value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit} id="form">
        <input
          placeholder="write task here"
          name="item"
          value={form.item}
          onChange={handleChange}
        />
      </form>
      <button type="submit" form="form">
        Add Todo
      </button>
    </div>
  );
}
