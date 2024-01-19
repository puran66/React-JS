import { combineReducers } from "redux";
import { productReducer } from "./User/reducer/reducer";

const rootreducer = combineReducers({
  productReducer,
});

export default rootreducer;