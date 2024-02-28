import { createSlice } from '@reduxjs/toolkit';

const initModalState = {
  toShow: true,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initModalState,
  reducers: {
    show() {},
    hide(state) {
      state.toShow = false;
    },
    toggle() {},
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
