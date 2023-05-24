import { createSlice } from "@reduxjs/toolkit";
import { IMatrixState } from "./interfaces";
import { RootState } from "./store";

const initialState: IMatrixState = {
  do: [],
  delegate: [],
  schedule: [],
  delete: [],
};

export const matrixSlice = createSlice({
  name: "matrix",
  initialState,
  reducers: {
    addToSquare: (state, action) => {
      console.log("Add");
    },
    removeFromSquare: (state, action) => {
      console.log("Remove");
    },
  },
});

export const { addToSquare, removeFromSquare } = matrixSlice.actions;
export const selectMatrix = (state: RootState) => state.matrix;
export default matrixSlice.reducer;
