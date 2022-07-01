import * as types from "./actionTypes";

const initState = {
  inputVal: "",
  todos: [],
};

const reducer = (state = initState, action) => {
  if (action.type === types.ADD_TODO) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todos.push(newState.inputVal);
    newState.inputVal = "";
    return newState;
  }
  if (action.type === types.UPDATE_INPUT) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputVal = action.payload;
    return newState;
  }
  if (action.type === types.DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todos.splice(action.payload, 1);
    return newState;
  }
  return state;
};

export default reducer;
