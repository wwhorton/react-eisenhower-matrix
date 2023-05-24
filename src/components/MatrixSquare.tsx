import React from "react";
import { IMatrixSquare } from "../interfaces";
import { MATRIX_SQUARE_CLASS } from "../constants";
import ToDoList from "./ToDoList";

const MatrixSquare = ({ items, type }: IMatrixSquare) => {
  return (
    <section className={`${MATRIX_SQUARE_CLASS}--type`}>
      <ToDoList list={items} />
    </section>
  );
};

export default MatrixSquare;
