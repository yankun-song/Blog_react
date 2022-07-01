import * as types from "./actionTypes";
// import axios from "axios";

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

export const initListAction = (input) => ({
  type: types.INIT_LIST,
  payload: input,
});
export const getInitList = () => ({ type: types.GET_INIT_LIST });
