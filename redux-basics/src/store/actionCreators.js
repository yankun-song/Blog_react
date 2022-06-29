import * as types from "./actionTypes";

export const changeInputAction = (input) => ({
  type: types.CHANGE_INPUT_VALUE,
  payload: input,
});

export const btnClickAction = () => ({
  type: types.ADD_TODO,
});

export const deleteItemAction = (idx) => ({
  type: types.DELETE_ITEM,
  payload: idx,
});
