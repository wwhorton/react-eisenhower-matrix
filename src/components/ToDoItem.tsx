import React from "react";
import { IToDoItem } from "../interfaces";
import { useAppDispatch } from "../hooks";
import { removeToDo } from "../toDoSlice";

const ToDoItem = (item: IToDoItem) => {
  const dispatch = useAppDispatch();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(removeToDo(item));
  };
  const handleDragStart = (event: React.DragEvent<HTMLLIElement>) => {
    event.dataTransfer.setData("text/plain", "Dragging list item");
    event.currentTarget.classList.add("todo-list-item--dragging");
  };
  const handleDragEnd = (event: React.DragEvent<HTMLLIElement>): void => {
    event.currentTarget.classList.remove("todo-list-item--dragging");
  };

  return (
    <li
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className="todo-list-item"
    >
      {item.id} {item.text}
      <button type="button" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
