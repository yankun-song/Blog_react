import * as types from "./actionTypes";

export const updateInputAction = (input) => ({
  type: types.UPDATE_INPUT,
  payload: input,
});
export const addTodoAction = () => ({
  type: types.ADD_TODO,
});
export const deleteItemAction = (idx) => ({
  type: types.DELETE_ITEM,
  payload: idx,
});
