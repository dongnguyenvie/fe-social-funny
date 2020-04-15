import { combineReducers } from "redux";
import { getUserReducer } from "./authentication/Auth.reducer";
import { music } from "./music/Music.reducer";

const rootReducers = combineReducers({
  user: getUserReducer,
  music,
});

export default rootReducers;
export type IRootState = ReturnType<typeof rootReducers>;
