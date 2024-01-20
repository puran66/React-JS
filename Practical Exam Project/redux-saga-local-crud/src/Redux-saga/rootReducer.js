import { combineReducers } from "redux";
import { productReducer } from "./Admin/reducer/reducer";

const rootReducer = combineReducers({
  productReducer,
});

export default rootReducer;