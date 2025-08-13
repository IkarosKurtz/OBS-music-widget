export const TRACK_API_URL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=<USERNAME>&api_key=<API_KEY>&format=json`;

export const ARTIST_API_URL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=$artist&api_key=<API_KEY>&format=json`;

export const DEFAULT_COVER =
  'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png';
