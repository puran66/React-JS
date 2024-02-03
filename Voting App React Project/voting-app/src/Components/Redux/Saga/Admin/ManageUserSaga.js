import { call, put } from 'redux-saga/effects';
import { add_party_api, add_user_api, delete_user_api, get_data_api, get_party_api, update_user_api } from '../../Admin/api/api';
import { ADD_PARTY_ERROR, ADD_PARTY_SUCCESS, ADD_USER_ERROR, ADD_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_SUCCESS, GET_PARTY_ERROR, GET_PARTY_SUCCESS, GET_USER_ERROR, GET_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS } from '../../Admin/action/action';

// GET user SAGA //

export function* userSaga(action) {
  try {
    const response = yield call(get_data_api, action)

    console.log(response.data.Data, "from user saga");

    const data = response.data.Data;
    const status = response.status;

    if (status === 200 || status === 201) {
      yield put({ type: GET_USER_SUCCESS, data })
    }
    else {
      yield put({ type: GET_USER_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: GET_USER_ERROR, err })
  }
}

// Delete user SAGA //

export function* deleteUserSaga(action) {
  try {
    const response = yield call(delete_user_api, action)

    console.log(response, "from delete user saga");

    const { data, status } = response;

    if (status === 200 || status === 201) {
      yield put({ type: DELETE_USER_SUCCESS, data })
    }
    else {
      yield put({ type: DELETE_USER_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: DELETE_USER_ERROR, err })
  }
}

// Update user SAGA //

export function* updateUserSaga(action) {
  try {
    const response = yield call(update_user_api, action)

    console.log(response, "from update user saga");

    const { data, status } = response;

    if (status === 200 || status === 201) {
      yield put({ type: UPDATE_USER_SUCCESS, data })
    }
    else {
      yield put({ type: UPDATE_USER_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: UPDATE_USER_ERROR, err })
  }
}

// Add user SAGA //

export function* addUserSaga(action) {
  try {
    const response = yield call(add_user_api, action)

    console.log(response, "from ADD user saga");

    const { data, status } = response;

    console.log(data, status, "from saga");

    if (status === 200 || status === 201) {
      yield put({ type: ADD_USER_SUCCESS, data })
    }
    else {
      yield put({ type: ADD_USER_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: ADD_USER_ERROR, err })
  }
}

// Add Party SAGA //

export function* addPartySaga(action) {
  try {
    const response = yield call(add_party_api, action)

    console.log(response, "from ADD user saga");

    const { data, status } = response;

    console.log(data, status, "from saga");

    if (status === 200 || status === 201) {
      yield put({ type: ADD_PARTY_SUCCESS, data })
    }
    else {
      yield put({ type: ADD_PARTY_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: ADD_PARTY_ERROR, err })
  }
}

// Get Party SAGA //

export function* getPartySaga(action) {
  try {
    const response = yield call(get_party_api, action)

    console.log(response, "from get party user saga");

    const { data, status } = response;

    console.log(data, status, "from saga");

    if (status === 200 || status === 201) {
      yield put({ type: GET_PARTY_SUCCESS, data })
    }
    else {
      yield put({ type: GET_PARTY_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: GET_PARTY_ERROR, err })
  }
}