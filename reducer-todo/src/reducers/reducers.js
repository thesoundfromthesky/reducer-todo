import { useReducer } from "react";

export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
};
export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_TODO":
      return state.map(item => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    case "CLEAR_TODO":
      return state.filter(item => !item.completed);
    default:
      return state;
  }
}

export function useTodo(state = initialState) {
  return useReducer(todoReducer, [state]);
}
