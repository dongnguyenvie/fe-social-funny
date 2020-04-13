import { combineReducers } from "redux";
import { getUserReducer } from "./authentication/Auth.reducer";
import { musicReducer } from "./music/Music.reducer";

export default combineReducers({
  user: getUserReducer,
  music: musicReducer,
});
