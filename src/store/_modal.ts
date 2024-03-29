import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initModalState = {
  toShow: false,
  text: '',
  success: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initModalState,
  reducers: {
    show(state, action: PayloadAction<string>) {
      state.toShow = true;
      state.text = action.payload;
    },
    hide(state) {
      state.toShow = false;
      state.success = false;
    },
    success(state) {
      state.toShow = false;
      state.success = true;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
