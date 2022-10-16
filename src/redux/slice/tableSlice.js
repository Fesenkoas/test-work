import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  table: [],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    getTable(state, action) {
      state.table = action.payload;
      state.loading=true
    },
    loading(state,action){
      state.loading = action.payload;
    }
  },
});

// const a = 'quantity'
// console.log(item[`${a}`]);

export default tableSlice.reducer;
export const { getTable, loading } = tableSlice.actions;
