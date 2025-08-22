import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Widget } from './components/Widget';
import { WidgetLite } from './components/WidgetLite';
import { DEFAULT_COVER } from './utilities/Constants';
import { getArtistURL, getTrackURL } from './utilities/Functions';
import type {
  LastFm,
  LastFmArtistResponse,
  TrackData
} from './utilities/Types';

function App() {
  const [track, setTrack] = useState<TrackData>({
    artist: 'EL Ivan',
    cover: 'https://media.tenor.com/aj2m5lTme9cAAAAM/darkville-rpg.gif',
    title: 'IVANCIOS'
  });

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const trackResponse = await axios.get<LastFm>(getTrackURL());
      const tracks = trackResponse.data.recenttracks.track;
      const latestTrack = tracks[0];

      const artistResponse = await axios.get<LastFmArtistResponse>(
        getArtistURL(latestTrack.artist['#text'])
      );
      const artist = artistResponse.data.artist;

      let coverImage =
        latestTrack.image[2]['#text'] || artist.image[2]['#text'];

      if (coverImage === '' || coverImage === DEFAULT_COVER) {
        coverImage =
          'https://media.tenor.com/aj2m5lTme9cAAAAM/darkville-rpg.gif';
      }

      if (latestTrack.name === track.title) {
        return;
      }

      divRef.current!.style.marginLeft = '-380px';

      setTimeout(() => {
        setTrack({
          artist: artistResponse.data.artist.name,
          cover: coverImage,
          title: latestTrack.name || ''
        });

        setTimeout(() => {
          divRef.current!.style.marginLeft = '0px';
        }, 750);
      }, 750);
    }, 4_000);

    return () => clearInterval(intervalId);
  }, [track]);

  return (
    <div className="flex justify-between h-[128px]">
      <Widget track={track} divRef={divRef} />
      <WidgetLite track={track} />
    </div>
  );
}

export default App;
