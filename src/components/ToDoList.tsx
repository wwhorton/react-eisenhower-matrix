import ToDoItem from "./ToDoItem";
import { IToDoList } from "../interfaces";

const ToDoList = ({ list }: IToDoList) => {
  const handleDragOver = (event: React.DragEvent<HTMLElement>): void => {
    console.log(`Drag Over: ${event}`);
  };
  const handleDragEnter = (event: React.DragEvent<HTMLElement>): void => {
    console.log(`Drag Enter: ${event}`);
  };
  const handleDragLeave = (event: React.DragEvent<HTMLElement>): void => {
    console.log(`Drag Leave: ${event}`);
  };
  const handleDrop = (event: React.DragEvent<HTMLElement>): void => {
    console.log(`Drop: ${event}`);
  };
  return (
    <ul>
      {list.map((item) => {
        return (
          <div
            className="list-slot"
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <ToDoItem id={item.id} text={item.text} key={item.id} />
          </div>
        );
      })}
    </ul>
  );
};

export default ToDoList;
