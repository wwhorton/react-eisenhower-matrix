import React from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import { useAppSelector } from "./hooks";
import { selectToDoList } from "./toDoSlice";
import ToDoInput from "./components/ToDoInput";

function App() {
  const toDoList = useAppSelector(selectToDoList);

  return (
    <main>
      <header>
        <h1>To Do List</h1>
      </header>
      <section>
        {toDoList.length ? <ToDoList list={toDoList} /> : <p>No list yet!</p>}
      </section>
      <section>
        <ToDoInput />
      </section>
    </main>
  );
}

export default App;
