import React from 'react';

import css from './welcome.scss';

interface IApp {
    name: string
    playlists: IPlaylist[]
}

interface IPlaylist {
    name: string
    songs?: ISong[]
}

interface ISong {
    artist: string
    title: string
}

const Welcome = () => (
   <>
   <div className={css.wrapper}>
       <h2>App Name: BLAH</h2>
       <h4>Playlist Name: BLAH Playlist</h4>
       <p>SONG NAME 1</p>
       <p>SONG NAME 2</p>
       <p>SONG NAME 3</p>
       <p>SONG NAME 4</p>
       <p>SONG NAME 5</p>
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

export default Welcome;