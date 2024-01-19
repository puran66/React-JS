import { applyMiddleware,createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootreducer from "./rootReducer";
import { rootSaga } from "./Saga";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootreducer,
  applyMiddleware(rootSaga)
);

sagaMiddleware.run(rootSaga);

export default store;