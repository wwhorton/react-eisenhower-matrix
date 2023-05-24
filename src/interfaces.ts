export interface IToDoItem {
  id: number;
  text: string;
}

export interface IToDoList {
  list: IToDoItem[];
}

export interface IState {
  todos: IToDoState;
  matrix: IMatrixState;
}

export interface IToDoState {
  todos: Array<IToDoItem>;
}

export interface IMatrixState {
  do: Array<IToDoItem>;
  delegate: Array<IToDoItem>;
  schedule: Array<IToDoItem>;
  delete: Array<IToDoItem>;
}

export interface IMatrixSquare {
  items: Array<IToDoItem>;
  type: string;
}
