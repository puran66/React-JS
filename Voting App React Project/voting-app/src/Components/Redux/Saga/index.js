import { all } from "@redux-saga/core/effects";
import { handle_addPartySaga, handle_addUserSaga, handle_deleteUserSaga, handle_getPartySaga, handle_updateUserSaga, handle_userSaga } from "./root/rootSaga";

export function* rootSaga (){
  yield all([handle_userSaga(),handle_deleteUserSaga(),handle_updateUserSaga(),handle_addUserSaga(),handle_addPartySaga(),handle_getPartySaga()])
}