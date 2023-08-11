import {request} from '.';

export interface ITodoItem {
  description: string;
  complete: boolean;
  date: string;
  id: number;
}

interface IAddTodoPayload {
  description: string;
}

export const getTodoItems = async () => {
  return request.get('/todoitems').then(({data}) => data);
};

export const addTodo = async (payload: IAddTodoPayload) => {
  request
    .post('/todoitems', payload)
    .catch(e => console.log('Post item error: ' + e));
};
