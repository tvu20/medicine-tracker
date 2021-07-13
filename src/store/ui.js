import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggle: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    openModal(state) {
      state.toggle = true;
    },
    closeModal(state) {
      state.toggle = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
