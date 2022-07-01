import * as actions from "./actionTypes";

const defaultState = {
  inputVal: "",
  todos: [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ],
};

const todoReducer = (state = defaultState, action) => {
  if (action.type === actions.INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todos = action.payload;
    return newState;
  }
  if (action.type === actions.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputVal = action.payload;
    return newState;
  }
  if (action.type === actions.ADD_TODO) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todos.push(newState.inputVal);
    newState.inputVal = "";
    return newState;
  }
  if (action.type === actions.DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todos.splice(action.payload, 1);
    return newState;
  }
  return state;
};
export default todoReducer;
