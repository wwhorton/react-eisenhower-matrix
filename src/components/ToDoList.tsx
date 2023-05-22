import ToDoItem from "./ToDoItem";
import { IToDoItem, IToDoList } from "../interfaces";
import { useAppDispatch } from "../hooks";
import { insertToDo } from "../toDoSlice";

const ToDoList = ({ list }: IToDoList) => {
  const dispatch = useAppDispatch();
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };
  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };
  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>): void => {
    console.log(`Drag Leave: ${event}`);
  };
  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    item: IToDoItem,
    location: number
  ): void => {
    event.preventDefault();
    dispatch(insertToDo({ item, location }));
  };
  return (
    <ul>
      {list.map((item, index) => {
        return (
          <div
            className="list-slot"
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={(event) => handleDrop(event, item, index)}
            key={index}
          >
            <ToDoItem id={item.id} text={item.text} key={item.id} />
          </div>
        );
      })}
    </ul>
  );
};

export default ToDoList;
