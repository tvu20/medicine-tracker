import { configureStore } from '@reduxjs/toolkit';

import prescriptionSlice from './prescription';

const store = configureStore({
  reducer: { prescription: prescriptionSlice.reducer },
});

export default store;
