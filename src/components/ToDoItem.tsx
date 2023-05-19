import React from "react";
import { IToDoItem } from "../interfaces";
import { useAppDispatch } from "../hooks";
import { removeToDo } from "../toDoSlice";

const ToDoItem = (item: IToDoItem) => {
  const dispatch = useAppDispatch();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(removeToDo(item));
  };
  return (
    <li>
      {item.id} {item.text}
      <button type="button" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
