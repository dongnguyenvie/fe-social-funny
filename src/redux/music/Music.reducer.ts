import { Reducer } from "redux";
import { IFechMusicNewRelease, ActionTypeKeys, ActionTypes } from "./Type";

const initState = {};

export const music: Reducer<any, ActionTypes> = (state = initState, action) => {
  switch (action.type) {
    case ActionTypeKeys.SET_MUSIC_SUCCESSFULLY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
