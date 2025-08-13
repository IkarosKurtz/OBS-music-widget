import Marquee from 'react-fast-marquee';
import type { TrackData } from '../utilities/Types';

interface WidgetProps {
  track: TrackData;
}

export function WidgetLite({ track }: WidgetProps) {
  return (
    <div className="widget-lite">
      <div className="info-container">
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
        className="info-song-bg-lite"
        style={{ backgroundImage: `url(${track.cover})` }}
      />
      <div className="info-song-bg-filter-lite" />
    </div>
  );
}
