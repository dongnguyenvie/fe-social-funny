import { Reducer } from "redux";
import * as ActionTypeKeys from "actions/ActionTypeKeys";

const initState = {};

export const musicReducer: Reducer<any, any> = (
  state = initState,
  action
): any => {
  switch (action.type) {
    case ActionTypeKeys.SET_ARTIST_TOP_TRACKS:
      console.log(action.payload);
      return action.payload;
    // case ActionTypeKeys.SET_COUNT:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    default:
      return state;
  }
};

// export const onSetCount = (payload: any): any => {
//   return {
//     type: ActionTypeKeys.SET_COUNT,
//     payload,
//   };
// };
