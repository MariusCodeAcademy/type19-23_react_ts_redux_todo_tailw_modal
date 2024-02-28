import { createSlice } from '@reduxjs/toolkit';

const initModalState = {
  toShow: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initModalState,
  reducers: {
    show() {},
    hide() {},
    toggle() {},
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
