import { IFeaturedPlaylists } from "redux/music/Type";

export interface IPropsContainer {
  onFetchNewReleasesTracks: () => void;
  onFetchFeaturedPlaylists: ({
    limit,
    offset,
    country,
    locale,
    timestamp,
  }: IFeaturedPlaylists) => void;
}
