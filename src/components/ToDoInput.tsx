import { useAppDispatch } from "../hooks";
import React, { useState } from "react";
import { addToDo } from "../toDoSlice";

const ToDoInput = () => {
  const dispatch = useAppDispatch();
  const [inputItem, setInputItem] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addToDo(inputItem));
    setInputItem("");
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputItem(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="To Do Item"
        value={inputItem}
        onChange={handleInputChange}
      />
      <button type="submit">Add to List</button>
    </form>
  );
};

export default ToDoInput;
