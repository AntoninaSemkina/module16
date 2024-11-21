import { applyMiddleware, combineReducers, createStore } from "redux";
import { taskReduser } from "./taskReducer";
import { countReducer } from "./countReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  tasks: taskReduser,
  count: countReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
