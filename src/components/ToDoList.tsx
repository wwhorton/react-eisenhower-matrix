import ToDoItem from "./ToDoItem";
import { IToDoList } from "../interfaces";

const ToDoList = ({ list }: IToDoList) => {
  return (
    <ul>
      {list.map((item) => {
        return <ToDoItem id={item.id} text={item.text} key={item.id} />;
      })}
    </ul>
  );
};

export default ToDoList;
