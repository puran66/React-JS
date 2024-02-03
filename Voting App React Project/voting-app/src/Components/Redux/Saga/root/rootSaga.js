import { takeLatest } from "@redux-saga/core/effects";
import { ADD_PARTY_PROGRESS, ADD_USER_PROGRESS, DELETE_USER_PROGRESS, GET_PARTY_PROGRESS, GET_USER_PROGRESS, UPDATE_USER_PROGRESS } from "../../Admin/action/action";
import { addPartySaga, addUserSaga, deleteUserSaga, getPartySaga, updateUserSaga, userSaga } from "../Admin/ManageUserSaga";

// handle user saga //
export function* handle_userSaga(){
  yield takeLatest(GET_USER_PROGRESS,userSaga)
}

// handle DELETE user saga //
export function* handle_deleteUserSaga(){
  yield takeLatest(DELETE_USER_PROGRESS,deleteUserSaga)
}

// handle update user saga //
export function* handle_updateUserSaga(){
  yield takeLatest(UPDATE_USER_PROGRESS,updateUserSaga)
}

// handle add user saga //
export function* handle_addUserSaga(){
  yield takeLatest(ADD_USER_PROGRESS,addUserSaga)
}

// handle add Party saga //
export function* handle_addPartySaga(){
  yield takeLatest(ADD_PARTY_PROGRESS,addPartySaga)
}

// handle get Party saga //
export function* handle_getPartySaga(){
  yield takeLatest(GET_PARTY_PROGRESS,getPartySaga)
}