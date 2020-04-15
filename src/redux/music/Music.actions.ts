import {
  IFechMusicNewRelease,
  ActionTypeKeys,
  IFetchFeaturedPlaylists,
  IFeaturedPlaylists,
} from "./Type";

export const onFetchMusicRelease = (): IFechMusicNewRelease => ({
  type: ActionTypeKeys.FETCH_MUSIC_NEW_RELEASES,
});

export const actionFetchFeaturedPlaylists = (
  payload: IFeaturedPlaylists
): IFetchFeaturedPlaylists => ({
  type: ActionTypeKeys.FETCH_MUSIC_FEATURED_PLAYLISTS,
  payload,
});

export const successFetch = (payload: any): any => ({
  type: ActionTypeKeys.SET_MUSIC_SUCCESSFULLY,
  payload,
});
