import { combineReducers } from "redux";
import { getUserReducer } from "./authentication/Auth.reducer";

export default combineReducers({
  user: getUserReducer,
});
