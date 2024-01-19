import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_PROGRESS } from "../../User/action/action";
import { handle_get_data_api } from "../User/ManageProductSaga";

export function* handle_product_saga (){
  yield takeLatest(GET_PRODUCT_PROGRESS,handle_get_data_api)
}