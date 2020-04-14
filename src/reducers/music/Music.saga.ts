import { put, takeEvery, fork, delay } from "redux-saga/effects";
import services from "services";
import { IFechMusicNewRelease, ActionTypeKeys, ActionTypes } from "./Type";

export function* watchFetch() {
  yield takeEvery(
    ActionTypeKeys.FETCH_MUSIC_NEW_RELEASES,
    fetchNewReleasesTracks
  );
}

export function* fetchNewReleasesTracks() {
  try {
    const rs = yield fetch(services.music.getNewReleases);
    const rawData = yield rs.json();

    yield put(successFetch(rawData));
    // yield fork(changeStatus, { ...data, isLoading: false })
  } catch (err) {
    // yield put(successFetch());
  }
}

const successFetch = (payload: any): any => ({
  type: ActionTypeKeys.SET_MUSIC_NEW_RELEASES,
  payload,
});
