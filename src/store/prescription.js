import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const prescriptionSlice = createSlice({
  name: 'prescription',
  initialState: initialState,
  reducers: {
    replacePrescription(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addMedicine(state, action) {
      state.items.push(action.payload);
      state.totalQuantity++;
      state.changed = true;
    },
    removeMedicine(state, action) {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      state.totalQuantity--;
      state.changed = true;
    },
    resetChangedStatus(state, action) {
      state.changed = false;
    },
  },
});

export const prescriptionActions = prescriptionSlice.actions;

export default prescriptionSlice;
