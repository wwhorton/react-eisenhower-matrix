export interface IToDoItem {
  id: number;
  text: string;
}

export interface IToDoList {
  list: IToDoItem[];
}

export interface IState {
  todos: IToDoState;
  matrix: {
    do: Array<IToDoItem>;
    delegate: Array<IToDoItem>;
    schedule: Array<IToDoItem>;
    delete: Array<IToDoItem>;
  };
}

export interface IToDoState {
  todos: Array<IToDoItem>;
}
