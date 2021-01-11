import React from "react";
import axios from "axios";

import css from "./welcome.module.scss";
import { IFindSongResponse, IItem } from "components/api/spotify/spotify-interfaces";
import { SpotifyTaskRunner } from "components/api/spotify/taskRunner";

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

   const findSong = async () => {
      const findResponse: IFindSongResponse = await spotifyRunner.findSong(tok, '/api/spotify/find-song', { query: searchValue })

      const imgs = findResponse.tracks.items.map((i: IItem) => {
         return i.album.images.length ? i.album.images[0].url : 'https://pbs.twimg.com/media/CVHfDCcUwAE9eN3.jpg'
      })
      setSearchedImages(imgs)
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
         </div>
      </>
  );
};

export default Welcome;
