import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import { rootSaga } from "./Saga";
import rootReducer from "./rootReducer";

const SagaMiddleware = createSagaMiddleware();


const Store = createStore(
  rootReducer,
  applyMiddleware(SagaMiddleware)
);

SagaMiddleware.run(rootSaga);

export default Store;
