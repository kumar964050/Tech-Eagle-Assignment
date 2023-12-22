import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  no_of_runners: 0,
  runners: [],
};

export const runnersSlice = createSlice({
  name: "runner",
  initialState,
  reducers: {
    addRunner: (state, action) => {
      state.no_of_runners += 1;
      state.runners.push(action.payload);
    },
  },
});

export const { addRunner } = runnersSlice.actions;

export default runnersSlice.reducer;
