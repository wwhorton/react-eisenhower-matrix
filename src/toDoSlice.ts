import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToDoItem, IToDoState } from "./interfaces";
import { RootState } from "./store";

const initialState: IToDoState = {
  todos: [
    { id: 1, text: "Sample text one" },
    { id: 2, text: "Sample text two" },
    { id: 3, text: "Sample text three" },
    { id: 4, text: "Sample text four" },
    { id: 5, text: "Sample text five" },
  ],
};

export const toDoSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        { id: state.todos.length + 1, text: action.payload },
      ];
    },
    removeToDo: (state, action: PayloadAction<IToDoItem>) => {
      state.todos = state.todos.filter(
        (item) =>
          item.id !== action.payload.id && item.text !== action.payload.text
      );
    },
    insertToDo: (
      state,
      action: PayloadAction<{ item: IToDoItem; location: number }>
    ): void => {
      state.todos = state.todos.filter(
        (item) =>
          item.id !== action.payload.item.id &&
          item.text !== action.payload.item.text
      );
      state.todos = [
        ...state.todos.slice(0, action.payload.location - 1),
        action.payload.item,
        ...state.todos.slice(action.payload.location - 1),
      ];
    },
  },
});

export const { addToDo, removeToDo, insertToDo } = toDoSlice.actions;
export const selectToDoList = (state: RootState) => state.toDoList.todos;

export default toDoSlice.reducer;
