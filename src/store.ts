import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from "./toDoSlice";
import matrixReducer from "./matrixSlice";

const store = configureStore({
  reducer: {
    toDoList: toDoListReducer,
    matrix: matrixReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
