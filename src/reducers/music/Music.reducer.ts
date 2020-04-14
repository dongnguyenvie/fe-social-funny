import { Reducer } from "redux";
import { IFechMusicNewRelease, ActionTypeKeys, ActionTypes } from "./Type";

const initState = {};

export const musicNewReleaseReducer: Reducer<any, ActionTypes> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case ActionTypeKeys.SET_MUSIC_NEW_RELEASES:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export const onFetchMusicRelease = (): IFechMusicNewRelease => {
  return {
    type: ActionTypeKeys.FETCH_MUSIC_NEW_RELEASES,
  };
};
