import Marquee from 'react-fast-marquee';
import type { TrackData } from '../utilities/Types';

interface WidgetProps {
  track: TrackData;
  divRef: React.RefObject<HTMLDivElement>;
}

export function Widget({ track, divRef }: WidgetProps) {
  return (
    <div className="widget">
      <div className="h-32 w-32 rounded-lg bg-white absolute -left-7 -z-[1]"></div>
      <img src={track.cover} className="cover" />
      <div ref={divRef} className="music-bar">
        <div className="music-bar-info">
          {track.title.length > 15 ? (
            <Marquee speed={35}>
              <h1 className="text-2xl mr-8">{track.title}</h1>
            </Marquee>
          ) : (
            <h1 className="text-2xl mr-8">{track.title}</h1>
          )}
          {track.artist.length > 15 ? (
            <Marquee speed={35}>
              <h2 className="text-white/70 text-lg mr-8">{track.artist}</h2>
            </Marquee>
          ) : (
            <h2 className="text-white/70 text-lg">{track.artist}</h2>
          )}
        </div>
        <div
          className="song-bg music-bar-song-bg"
          style={{ backgroundImage: `url(${track.cover})` }}
        />
        <div className="song-bg music-bar-song-bg-filter" />
      </div>
    </div>
  );
}
