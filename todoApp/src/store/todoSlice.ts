import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IAddTodoItem} from '../api/todoApi';

interface IInitialSliceState {
  todoItems: IAddTodoItem[];
}

const initialState: IInitialSliceState = {
  todoItems: [
    {
      description: 'First Task',
      complete: false,
      date: '24-07-2023',
    },
    {
      description: 'Second Task',
      complete: true,
      date: '24-07-2023',
    },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    SET_TODO_ITEM(state, {payload}: PayloadAction<IAddTodoItem>) {
      state.todoItems.push(payload);
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
