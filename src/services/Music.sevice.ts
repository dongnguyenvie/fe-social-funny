import { API_URL } from "./config";

const URL = `${API_URL}/music`;
export default class MusicService {
  public get getArtistTopTracks() {
    return URL + "/get-artist-top-tracks";
  }
}
