import * as express from "express";
import spotifyApi from './services/spotify-api'

const router = express.Router();

router.use("/spotify", spotifyApi);

export default router;
