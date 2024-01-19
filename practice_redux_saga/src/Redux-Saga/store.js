import { createStore } from "redux";

const dumyReducer =()=>{
  return 100;
}

const store = createStore(dumyReducer);

export default store;