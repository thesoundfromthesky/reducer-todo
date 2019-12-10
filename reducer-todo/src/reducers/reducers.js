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
    default:
      return state;
  }
}

export function useTodo(state = initialState) {
  return useReducer(todoReducer, [state]);
}
