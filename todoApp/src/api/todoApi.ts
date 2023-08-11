import {request} from '.';

export interface ITodoItem {
  description: string;
  complete: boolean;
  date: string;
  id: number;
}

interface ITodoPayload {
  description: string;
}

interface ITodoStatusPayload {
  complete: boolean;
}

interface ITodoPath {
  id: number;
}

interface IEditTodoParams {
  pathId: ITodoPath;
  param: ITodoPayload;
}

interface IEditTodoStatusParams {
  pathId: ITodoPath;
  param: ITodoStatusPayload;
}

export const getTodoItems = async () => {
  return request.get('/todoitems').then(({data}) => data);
};

export const addTodo = async (payload: ITodoPayload) => {
  request
    .post('/todoitems', payload)
    .catch(e => console.log('Post item error: ' + e));
};

export const deleteTodo = async (pathId: ITodoPath) => {
  const {id} = pathId;
  request.delete(`/todoitems/${id}`);
};

export const editTodo = async (params: IEditTodoParams) => {
  const {pathId, param} = params;
  request.put(`/todoitems/${pathId.id}?description=${param.description}`);
};

export const editTodoStatus = async (params: IEditTodoStatusParams) => {
  const {pathId, param} = params;
  request.put(`/todoitems/${pathId.id}?complete=${param.complete}`);
};
