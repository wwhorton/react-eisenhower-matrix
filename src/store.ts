import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from "./toDoSlice";

const store = configureStore({
  reducer: {
    toDoList: toDoListReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
