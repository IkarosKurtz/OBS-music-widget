import { ARTIST_API_URL, TRACK_API_URL } from './Constants';

export function getTrackURL() {
  return TRACK_API_URL.replace(
    '<USERNAME>',
    import.meta.env.VITE_LASTFM_USERNAME
  ).replace('<API_KEY>', import.meta.env.VITE_LASTFM_API_KEY);
}

export function getArtistURL(artist: string) {
  return ARTIST_API_URL.replace('$artist', artist).replace(
    '<API_KEY>',
    import.meta.env.VITE_LASTFM_API_KEY
  );
}
