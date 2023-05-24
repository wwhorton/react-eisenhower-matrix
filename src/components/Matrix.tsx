import React from "react";
import { useAppSelector } from "../hooks";
import { selectMatrix } from "../matrixSlice";
import { MATRIX_CATEGORIES } from "../constants";
import MatrixSquare from "./MatrixSquare";

const Matrix = () => {
  const matrix = useAppSelector(selectMatrix);

  return (
    <section>
      {MATRIX_CATEGORIES.map((cat: string) => {
        return (
          <MatrixSquare items={matrix[cat as keyof typeof matrix]} type={cat} />
        );
      })}
    </section>
  );
};

export default Matrix;
