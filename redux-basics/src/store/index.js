import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";

import todoReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);

export default store;
