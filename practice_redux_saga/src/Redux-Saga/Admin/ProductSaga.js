import { takeLatest } from "@redux-saga/core/effects";
import { GET_PRODUCT_PROGRESS } from "./action/action";

// get data //

export function get_product_saga() {
  yield takeLatest(GET_PRODUCT_PROGRESS,)
}