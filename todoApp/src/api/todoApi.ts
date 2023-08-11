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

interface ITodoPath {
  id: number;
}

interface IEditTodoParams {
  pathId: ITodoPath;
  param: ITodoPayload;
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
  request.put(`/todoitems/${pathId.id}`, param);
};
