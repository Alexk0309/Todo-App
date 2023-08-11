import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface IEditTaskModalData {
  id: number;
  description: string;
}

interface IHideShowModalProps {
  showModal: boolean;
  clearData?: boolean;
}
interface IInitialSliceState {
  editTaskModalData: Partial<IEditTaskModalData>;
  showEditTaskModal: boolean;
}

const initialState: IInitialSliceState = {
  editTaskModalData: {},
  showEditTaskModal: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    SETUP_EDIT_TASK_MODAL_DATA(
      state,
      {payload}: PayloadAction<IEditTaskModalData>,
    ) {
      state.editTaskModalData = payload;
    },
    CONTROL_EDIT_TASK_MODAL(
      state,
      {payload: {showModal, clearData}}: PayloadAction<IHideShowModalProps>,
    ) {
      state.showEditTaskModal = showModal;
      if (clearData) {
        state.editTaskModalData = {};
      }
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
