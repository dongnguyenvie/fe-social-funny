import { combineReducers } from "redux";
import { getUserReducer } from "./authentication/Auth.reducer";
import { musicNewReleaseReducer } from "./music/Music.reducer";

const rootReducers = combineReducers({
  user: getUserReducer,
  musicNewRelease: musicNewReleaseReducer,
});

export default rootReducers;
export type IRootState = ReturnType<typeof rootReducers>;
