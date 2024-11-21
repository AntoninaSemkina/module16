const defaultState = {
  tasks: [],
};
const initialState = {
  tasks: [],
};

const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const EDIT_TASK = "EDIT_TASK";

export const taskReduser = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, name: action.payload.newName }
            : task
        ),
      };
    default:
      return state;
  }
};

export const addTaskAction = (payload) => ({ type: ADD_TASK, payload });
export const removeTaskAction = (payload) => ({ type: REMOVE_TASK, payload });
export const editTaskAction = (taskId, newName) => ({
  type: EDIT_TASK,
  payload: { taskId, newName },
});
