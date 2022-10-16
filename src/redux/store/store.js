import { configureStore } from '@reduxjs/toolkit';
import tableSlice from './../slice/tableSlice';


export const store = configureStore({
  reducer: {
    table:tableSlice
  },
});
