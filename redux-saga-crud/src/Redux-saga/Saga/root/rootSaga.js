import { takeLatest } from "@redux-saga/core/effects";
import { ADD_TO_CART_PROGRESS, DELETE_DATA_PROGRESS, PRODUCT_DATA_PROGRESS, UPADTE_DATA_PROGRESS } from "../../Admin/action/action";
import { cartProductSaga, deleteProductSaga, productSaga, updateProductSaga } from "../Admin/ManageProductSaga";

// handle product saga //
export function* handle_saga(){
  yield takeLatest(PRODUCT_DATA_PROGRESS,productSaga)
}

// handle Delete product saga //
export function* handle_delete_saga(){
  yield takeLatest(DELETE_DATA_PROGRESS,deleteProductSaga)
}

// handle Add to Cart product saga //
export function* handle_cart_saga(){
  yield takeLatest(ADD_TO_CART_PROGRESS,cartProductSaga)
}

// handle Update Data product saga //
export function* handle_update_saga(){
  yield takeLatest(UPADTE_DATA_PROGRESS,updateProductSaga)
}