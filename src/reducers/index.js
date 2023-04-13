//root reducer
//import all reducers
import reducer from "./changeUser";
//to combine multiple reducers we import object combineReducers
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reducer,
  //other reducers if there//key value pairs
});
export default rootReducer;
