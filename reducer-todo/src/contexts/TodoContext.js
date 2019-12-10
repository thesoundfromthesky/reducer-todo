import React from "react";
import { createContext, useContext } from "react";
import { useTodo } from "../reducers/reducers";

const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const [todoState, todoDispatch] = useTodo();

  return (
    <TodoContext.Provider value={[todoState, todoDispatch]}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  return useContext(TodoContext);
}
