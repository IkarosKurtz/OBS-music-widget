import { useCallback, useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'

const TRACK_API_URL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=IkarosKurtz&api_key=${import.meta.env.VITE_LAST_FM_API_KEY}&format=json`
const ARTIST_API_URL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=$artist&api_key=${import.meta.env.VITE_LAST_FM_API_KEY}&format=json`
const UGLY_STAR = 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png'

function App () {
  const [track, setTrack] = useState({ title: '', artist: '' })
  const [cover, setCover] = useState('')

  const getTrackAndCover = useCallback(() => {
    fetch(TRACK_API_URL)
      .then(response => response.json())
      .then(data => {
        const track = data.recenttracks.track[0]
        let cover = track.image[2]['#text']

        if (cover === '' || cover === UGLY_STAR) {
          fetch(ARTIST_API_URL.replace('$artist', track.artist['#text']))
            .then(response => response.json())
            .then(data => {
              if (!data.artist) {
                cover = 'https://media.tenor.com/aj2m5lTme9cAAAAM/darkville-rpg.gif'
                return
              }
              cover = data.artist.image[2]['#text']
            })
        } else {
          cover = track.image[2]['#text']
        }

        cover = cover === '' || cover === UGLY_STAR ? 'https://media.tenor.com/aj2m5lTme9cAAAAM/darkville-rpg.gif' : cover

        // console.log(track)
        // console.log(cover)

        setTrack({ title: track.name, artist: track.artist['#text'] })
        setCover(cover)
      })

  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      getTrackAndCover()
    }, 5000)

    return () => clearInterval(interval)
  }, [track, getTrackAndCover])

  return (
    <div className='widget'>
      <img src={cover} alt="Album cover" className='cover' />

      <div className='info-container'>
        {
          track.title.length > 15 ?
            <Marquee speed={35}>
              <h1 className='text-2xl mr-8'>{track.title}</h1>
            </Marquee> :
            <h1 className='text-2xl '>{track.title}</h1>
        }
        {
          track.artist.length > 15 ?
            <Marquee speed={35}>
              <h2 className='text-white/70 text-lg mr-8'>{track.artist}</h2>
            </Marquee> :
            <h2 className='text-white/70 text-lg'>{track.artist}</h2>

        }
        <div className='info-song-bg' style={{ backgroundImage: `url(${cover})` }} />
        <div className='info-song-bg-filter'></div>
      </div>
    </div>
  )
}

export default App
