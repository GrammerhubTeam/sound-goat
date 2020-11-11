import React from 'react'
import axios from 'axios'

import css from './welcome.module.scss'
import { SpotifyTaskRunner } from 'components/utils/musicTaskRunner'

// interface IApp {
//     name: string
//     playlists: IPlaylist[]
// }

// interface IPlaylist {
//   name: string;
//   songs?: ISong[];
// }

// interface ISong {
//   artist: string;
//   title: string;
// }

const Welcome = () => {
  const tok =
    'BQCO5QZYJhY75xCOz2SbA-bURxE78bSPHsGTlUpccN0s5ntbm7S-i9MYZS8RMn7Csk1CsN9VZDJwjU-2Dm7eby24WHUrBJGZpO2oTxz_jhwR2qT5Q_Zqzq8Mx8tq1OrCf9okcGtnhAZgVJg2q_VAoQyO7t98bs2y_1EpsBewZWPH69Yrqh54aw'
  const getAllLists = async () => {
    const playlistFetch = await axios.post('/api/spotify-playlists-all', {
      accessToken: tok,
    })

    console.log(playlistFetch.data)
  }

  const randAsync = async () => {
    const blah = new SpotifyTaskRunner({})
    const nextVal = await blah.getPlaylist(
      tok,
      '/api/spotify-playlists',
      '3Qv3XVCAF5xAyF54cUyOcY'
    )
    console.log(nextVal)
  }

  React.useEffect(() => {
    randAsync()
  }, [])

  return (
    <>
      <div className={css.wrapper}>
        <h2>App Name: BLAH</h2>
        <h4>Playlist Name: BLAH Playlist</h4>
        <p>SONG NAME 1</p>
        <p>SONG NAME 2</p>
        <p>SONG NAME 3</p>
        <p>SONG NAME 4</p>
        <p>SONG NAME 5</p>

        <button onClick={getAllLists}>CLICK TO GET PLAYLISTS</button>

        {/* <div className={css.padding}>
                  
                  <div id={css.cardSlider}>
                     
                     <div className={css.headerCard}>
                        <div className={css.headerPic}>
                           <img src="https://image.shutterstock.com/image-photo/funny-cat-ophthalmologist-appointmet-squinting-260nw-598805597.jpg" />
                        </div>
                        <h1>Oooh my Cat Jams  </h1>
                     </div>
                     <div className={css.headerTagline}>
                        Grab your favorite playlists from music apps
                     </div>

                     <div className={css.headerCard}>
                        <div className={css.headerPic}>
                           <img src="https://image.shutterstock.com/image-photo/funny-cat-ophthalmologist-appointmet-squinting-260nw-598805597.jpg" />
                        </div>
                        <h1>Feel my stomp like a MAD goat  </h1>
                     </div>
                     <div className={css.headerTagline}>
                        Hear your tunes like JORDAN player 
                     </div>


                  </div>   
               </div> */}
      </div>
    </>
  )
}

export default Welcome
