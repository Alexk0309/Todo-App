import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ITodoItem} from '../api/todoApi';

interface IInitialSliceState {
  todoItems: ITodoItem[];
}

const initialState: IInitialSliceState = {
  todoItems: [
    {
      description: 'First Task',
      complete: false,
      date: '24-07-2023',
      id: 1,
    },
    {
      description: 'Second Task',
      complete: true,
      date: '24-07-2023',
      id: 2,
    },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    SET_TODO_ITEM(state, {payload}: PayloadAction<ITodoItem>) {
      state.todoItems.push(payload);
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
