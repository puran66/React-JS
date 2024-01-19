import { call, put } from "redux-saga/effects";
import { get_product } from "../../User/api/api";
import { GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS } from "../../User/action/action";

 // GET PRODUCTS    //
export function* handle_get_data_api(action) {
  try {
    const res = yield call(get_product, action)

    console.log("data res from saga ", res);

    const [data, status] = res;

    if (status === 200 || status === 201) {
      yield put({ type: GET_PRODUCT_SUCCESS, data })
    }
    else {
      yield put({ type: GET_PRODUCT_ERROR, data })
    }
  }
  catch(err){
    yield put({type :GET_PRODUCT_ERROR , err})
  }

}