import { configureStore } from '@reduxjs/toolkit';

import prescriptionSlice from './prescription';
import uiSlice from './ui';

const store = configureStore({
  reducer: { prescription: prescriptionSlice.reducer, ui: uiSlice.reducer },
});

export default store;
