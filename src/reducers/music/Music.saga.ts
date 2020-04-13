import { put, takeEvery, fork, delay } from "redux-saga/effects";
// import { IGetTestState } from "../../actions/IActions";
import services from "services";
import * as ActionTypeKeys from "../../actions/ActionTypeKeys";

export function* watchFetch() {
  yield takeEvery(ActionTypeKeys.FETCH_ARTIST_TOP_TRACKS, fetchArtistTopTracks);
}

export function* fetchArtistTopTracks() {
  try {
    const rs = yield fetch(services.music.getArtistTopTracks);
    const rawData = yield rs.json();

    yield put(successFetch(rawData));
    // yield fork(changeStatus, { ...data, isLoading: false })
  } catch (err) {
    // yield put(successFetch());
  }
}

const successFetch = (payload: any): any => ({
  type: ActionTypeKeys.SET_ARTIST_TOP_TRACKS,
  payload,
});
