import { configureStore } from "@reduxjs/toolkit";

import runnersReducer from "./runnersSlice";

export const store = configureStore({
  reducer: {
    runners: runnersReducer,
  },
});
