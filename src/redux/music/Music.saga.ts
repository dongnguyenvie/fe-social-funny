import { put, takeLatest, fork, delay } from "redux-saga/effects";
import services from "services";
import {
  IFechMusicNewRelease,
  ActionTypeKeys,
  ActionTypes,
  IPayload,
  IFeaturedPlaylists,
} from "./Type";
import { successFetch } from "./Music.actions";

export function* watchFetch() {
  yield takeLatest(
    ActionTypeKeys.FETCH_MUSIC_NEW_RELEASES,
    fetchNewReleasesTracks
  );
  yield takeLatest(
    ActionTypeKeys.FETCH_MUSIC_FEATURED_PLAYLISTS,
    fetchFeaturedPlaylists
  );
}

export function* fetchNewReleasesTracks() {
  try {
    const rs = yield fetch(services.music.getNewReleases);
    const rawData = yield rs.json();

    yield put(successFetch(rawData));
  } catch (err) {
    // yield put(successFetch());
  }
}

export function* fetchFeaturedPlaylists(payload: IPayload) {
  try {
    const { payload: payloadAction }: any = payload;
    const response = yield services.music.getFeaturedPlaylists(payloadAction);
    yield put(successFetch({ featuredPlaylists: response?.playlists }));
  } catch (err) {
    // yield put(successFetch());
  }
}
