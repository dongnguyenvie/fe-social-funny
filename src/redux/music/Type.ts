export enum ActionTypeKeys {
  FETCH_MUSIC_NEW_RELEASES = "MUSIC/FETCH_MUSIC_NEW_RELEASES",
  FETCH_MUSIC_FEATURED_PLAYLISTS = "MUSIC/FETCH_MUSIC_FEATURED_PLAYLISTS",
  SET_MUSIC_SUCCESSFULLY = "MUSIC/SET_MUSIC_SUCCESSFULLY",
}

export interface IPayload {
  type: string;
  payload?: any;
}

// new-releases
export interface IMusic {}

export interface IFechMusicNewRelease {
  type: ActionTypeKeys.FETCH_MUSIC_NEW_RELEASES;
  payload?: any;
}

export interface IFetchFeaturedPlaylists {
  type: ActionTypeKeys.FETCH_MUSIC_FEATURED_PLAYLISTS;
  payload?: any;
}

export interface ISetMusicNewRelease {
  type: ActionTypeKeys.SET_MUSIC_SUCCESSFULLY;
  payload?: any;
}

export interface IFeaturedPlaylists {
  limit?: number;
  offset?: number;
  country?: string;
  locale?: string;
  timestamp?: string;
}

export type ActionTypes = IFechMusicNewRelease | ISetMusicNewRelease;
