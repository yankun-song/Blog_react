import store from ".";
import * as types from "./actionTypes";
import axios from "axios";

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

export const getTodoList = () => {
  return () => {
    axios.get("https://swapi.dev/api/people/1").then((res) => {
      const data = res.data.films;
      const action = initListAction(data);
      store.dispatch(action);
    });
  };
};
