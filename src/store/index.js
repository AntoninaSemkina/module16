import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./Slices/taskSlice";
import countReducer from "./Slices/countSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    count: countReducer,
  },
});

export default store;
