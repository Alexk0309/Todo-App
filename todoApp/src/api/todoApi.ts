import axios from 'axios';

export interface ITodoItem {
  description: string;
  complete: boolean;
  date: string;
  id: number;
}

export const getTodoItems = async () => {
  return axios
    .get('http://192.168.0.103:8080/api/v1/todoitems')
    .then(({data}) => data);
};
