export enum ActionTypeKeys {
  FETCH_MUSIC_NEW_RELEASES = "FETCH_MUSIC_NEW_RELEASES",
  SET_MUSIC_NEW_RELEASES = "SET_MUSIC_NEW_RELEASES",
}
// new-releases
// export interface IMusic {}

export interface IFechMusicNewRelease {
  type: ActionTypeKeys.FETCH_MUSIC_NEW_RELEASES;
  payload?: any;
}

export interface ISetMusicNewRelease {
  type: ActionTypeKeys.SET_MUSIC_NEW_RELEASES;
  payload?: any;
}

export type ActionTypes = IFechMusicNewRelease | ISetMusicNewRelease;
