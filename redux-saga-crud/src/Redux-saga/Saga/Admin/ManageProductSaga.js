import { call, put } from 'redux-saga/effects';
import { delete_data_api, get_data_api } from '../../Admin/api/api';
import { DELETE_DATA_ERROR, DELETE_DATA_PROGRESS, DELETE_DATA_SUCCESS, PRODUCT_DATA_ERROR, PRODUCT_DATA_SUCCESS } from '../../Admin/action/action';

// GET DATA SAGA //

export function* productSaga(action) {
  try {
    const response = yield call(get_data_api, action)

    console.log(response, "from product saga");

    const { data, status } = response;

    if (status === 200 || status === 201) {
      yield put({ type: PRODUCT_DATA_SUCCESS, data })
    }
    else {
      yield put({ type: PRODUCT_DATA_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: PRODUCT_DATA_ERROR, err })
  }
}

// DELETE DATA SAGA //

export function* deleteProductSaga(action) {
  console.log(action ,"from saga actionn");
  try {
    const response = yield call(delete_data_api, action)

    console.log(response, "from delete product saga");

    const { data, status } = response;

    if (status === 200 || status === 201) {
      yield put({ type: DELETE_DATA_PROGRESS, data })
    }
    else {
      yield put({ type: DELETE_DATA_SUCCESS, data })
    }
  }
  catch (err) {
    yield put({ type: DELETE_DATA_ERROR, err })
  }
}