import React from "react";
import axios from "axios";

import css from "./welcome.module.scss";
import { SpotifyTaskRunner } from "components/utils/musicTaskRunner";
import { IFindSongResponse, IItem } from "services/spotify-interfaces";

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
   const tok = 'BQC3mEgBMgMHpHEeFz3fKK-AdRLS5nEslxZpFLN2ipI8I9vPZ1ABgq3pmMx6LNNkDOVaGf_YEpQfToj_VoXb9RQUuG58T2FNzDZYYgeWsNcbgN7izqnFx9xp1OMOxuRxuF5P1tFiCZxiOoFj4ksxoIuEg0Y5XvYIkZnPX8H21D6HEag13BPxqg'
   const spotifyRunner = new SpotifyTaskRunner({})
   const [searchValue, setSearchValue] = React.useState('')
   const [searchedImages, setSearchedImages] = React.useState<string[]>([])


   const getAllLists = async () => {
      const playlistFetch = await axios.post("/api/spotify/playlists", {
         accessToken: tok,
      });

      console.log(playlistFetch.data);
   };

   // ALERT: Currently need to get access token from frontend ????
   // const randAsync = async () => {
   //    const blah = new SpotifyTaskRunner({})
   //    const nextVal = await blah.getPlaylist(tok, '/api/spotify/playlists', '3Qv3XVCAF5xAyF54cUyOcY')
   //    console.log(nextVal)
   // }

   // React.useEffect(() => {
   //    randAsync()
   // }, [])

   const findSong = async () => {
      const findResponse: IFindSongResponse = await spotifyRunner.findSong(tok, '/api/spotify/find-song', { query: searchValue })

      const imgs = findResponse.tracks.items.map((i: IItem) => {
         return i.album.images.length ? i.album.images[0].url : 'https://pbs.twimg.com/media/CVHfDCcUwAE9eN3.jpg'
      })
      setSearchedImages(imgs)

      console.log('---------', findResponse, '---------')
   }

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

         <div style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '2rem 0' }}></div>

         <input onChange={(e: any) => setSearchValue(e.target.value)} />
         <button onClick={findSong}>SEARCH FOR SONG</button>
         <div>
            {searchedImages.map((l: string, i: number) => {
               return <img key={i} src={l} style={{ maxHeight: '150px' }} />
            })}
         </div>

         {/* <div className={css.padding}>
         SPOTIFY BANK LIST ™
         1: finding playlists ✔️✔️✔️✔️
         2: add songs to playlist  
         3: add playlist (with songs?) 
         4: find song ✔️✔️✔️✔️
         5: remove songs
         6: edit playlist
                  
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
  );
};

export default Welcome;
