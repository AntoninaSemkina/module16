import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [] },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { taskId, newName } = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.name = newName;
      }
    },
  },
});

export const { addTask, removeTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
