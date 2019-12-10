import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { TodoContextProvider } from "./contexts/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <TodoList />
      </div>
    </TodoContextProvider>
  );
}

export default App;
