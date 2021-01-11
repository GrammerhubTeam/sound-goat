
import * as express from "express";
import spotifyApi from './components/api/spotify/spotify-api'
import soundcloudApi from './components/api/soundcloud/soundcloud-api'

const router = express.Router()

router.use("/spotify", spotifyApi);
router.use("/soundcloud", soundcloudApi);

export default router
