import { all } from "@redux-saga/core/effects";
import { handle_saga ,handle_delete_saga} from "./root/rootSaga";

export function* rootSaga (){
  yield all([handle_saga(),handle_delete_saga()])
}