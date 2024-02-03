import { all } from "@redux-saga/core/effects";
import { handle_saga ,handle_delete_saga, handle_cart_saga, handle_update_saga} from "./root/rootSaga";

export function* rootSaga (){
  yield all([handle_saga(),handle_delete_saga(),handle_cart_saga(),handle_update_saga()])
}