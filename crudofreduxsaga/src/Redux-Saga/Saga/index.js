import { all } from "@redux-saga/core/effects";
import { handle_product_saga } from "./root/rootProductSaga";

export function* rootSaga (){
  yield all([handle_product_saga])
}