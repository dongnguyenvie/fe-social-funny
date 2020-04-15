import { API_URL } from "./config";

interface IMusicService {
  readonly URL: string;
  getFeaturedPlaylists: ({
    limit,
    offset,
    country,
    locale,
    timestamp,
  }: {
    limit?: number;
    offset?: number;
    country?: string;
    locale?: string;
    timestamp?: string;
  }) => Promise<any>;
  exec: (url: string, body: any) => Promise<any>;
}
export default class MusicService implements IMusicService {
  public readonly URL = `${API_URL}/music`;

  public get getArtistTopTracks() {
    return `${this.URL}/get-artist-top-tracks`;
  }

  public get getNewReleases() {
    return `${this.URL}/get-new-releases`;
  }

  public getFeaturedPlaylists({
    limit = 5,
    offset = 0,
    country = "VN",
    locale = "vi",
    timestamp = new Date().toISOString(),
  }) {
    const url = `${this.URL}/get-featured-playlists`;
    const body = this.bodyDataPost({
      limit,
      offset,
      country,
      locale,
      timestamp,
    });
    return this.exec(url, body);
  }

  public bodyDataPost(body: any) {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
  }

  public async exec(url: string, body: any) {
    const response = await fetch(url, body);
    return response.json();
  }
}
