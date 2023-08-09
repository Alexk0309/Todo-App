import {request} from '.';

export interface ITodoItem {
  description: string;
  complete: boolean;
  date: string;
  id: number;
}

export const getTodoItems = async () => {
  return request.get('/todoitems').then(({data}) => data);
};
