import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IAddTodoItem} from '../../../api/todoApi';

interface IInitialSliceState {
  todoItems: IAddTodoItem[];
}

const initialState: IInitialSliceState = {
  todoItems: [],
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
