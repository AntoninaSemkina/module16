const defaultState = {
  count: 0,
};

const INCREMENT = "INCREMENT";

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export const incrementAction = () => ({ type: INCREMENT, payload: "" });
