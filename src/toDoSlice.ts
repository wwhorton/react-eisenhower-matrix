import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToDoItem, IToDoState } from "./interfaces";
import { RootState } from "./store";

const initialState: IToDoState = {
  todos: [],
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
  },
});

export const { addToDo, removeToDo } = toDoSlice.actions;
export const selectToDoList = (state: RootState) => state.toDoList.todos;

export default toDoSlice.reducer;
