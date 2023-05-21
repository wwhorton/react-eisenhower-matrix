import React from "react";
import { IToDoItem } from "../interfaces";
import { useAppDispatch } from "../hooks";
import { removeToDo } from "../toDoSlice";

const ToDoItem = (item: IToDoItem) => {
  const dispatch = useAppDispatch();
  let classes: Set<string> = new Set(["todo-list-item"]);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(removeToDo(item));
  };
  const handleDragStart = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    classes.add("todo-list-item--dragging");
  };
  const handleDragEnd = (event: React.DragEvent<HTMLElement>): void => {
    event.preventDefault();
    classes.delete("todo-list-item--dragging");
  };

  return (
    <li
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={Array.from(classes).join(" ")}
    >
      {item.id} {item.text}
      <button type="button" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
