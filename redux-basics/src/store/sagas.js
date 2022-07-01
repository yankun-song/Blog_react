import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { initListAction } from "./actionCreators";
import * as types from "./actionTypes";

function* getInitList() {
  try {
    const res = yield axios.get("https://swapi.dev/api/people/1");
    const action = initListAction(res.data.films);
    yield put(action);
  } catch (e) {
    console.log("Error");
  }
}

function* mySaga() {
  yield takeEvery(types.GET_INIT_LIST, getInitList);
}

export default mySaga;
