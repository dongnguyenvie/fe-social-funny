import { API_URL } from "./config";

export default class MusicService {
  private URL = `${API_URL}/music`;

  public get getArtistTopTracks() {
    return `${this.URL}/get-artist-top-tracks`;
  }

  public get getNewReleases() {
    return `${this.URL}/get-new-releases`;
  }
}
