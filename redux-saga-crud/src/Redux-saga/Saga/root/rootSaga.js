import { takeLatest } from "@redux-saga/core/effects";
import { DELETE_DATA_PROGRESS, PRODUCT_DATA_PROGRESS } from "../../Admin/action/action";
import { deleteProductSaga, productSaga } from "../Admin/ManageProductSaga";

// handle product saga //
export function* handle_saga(){
  yield takeLatest(PRODUCT_DATA_PROGRESS,productSaga)
}

// handle Delete product saga //
export function* handle_delete_saga(){
  yield takeLatest(DELETE_DATA_PROGRESS,deleteProductSaga)
}