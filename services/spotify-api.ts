import * as express from "express";
const request = require("request");
const axios = require("axios");

const router = express.Router();

const client_id =
  "55339ab7caba43bdbcf8b8438cea183c" ||
  process.env.SPOTIFY_CLIENT_ID ||
  "thiswillbreak";
const client_secret =
  "da0dbbd862c5455d996378522745839a" ||
  process.env.SPOTIFY_CLIENT_SECRET ||
  "thiswillbreak";
const redirect_uri = "http://localhost:3002/api/callback";
const scope = "user-read-private user-read-email";
const stateKey = "spotify_auth_state";

// ========================================================================
// =========================== AUX FUNCTIONS ==============================
// ========================================================================

const combineQueries = (obj: { [x: string]: string }) => {
  return (
    "?" +
    Object.keys(obj)
      .map((v: string) => `${v}=${obj[v]}`)
      .join("&")
  );
};

// ========================================================================
// ========================================================================
// ========================================================================


// ========================================================================
// =========================== AUTH FUNCTIONS =============================
// ========================================================================

router.get("/login", (req, res) => {
  const state = "biYe74ns9auR75KL";
  res.cookie(stateKey, state);

  console.log("NOW REDIRECTING.....LOGIN"); // CONSOLE
  res.redirect(
    `https://accounts.spotify.com/authorize${combineQueries({
      response_type: "code",
      client_id,
      scope,
      redirect_uri,
      state,
    })}`
  );
});

router.get("/callback", (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  console.log(
    "WE HAVE THE CALLBACK.....LOGIN",
    state,
    "AND",
    storedState,
    "COOKIES",
    req.cookies
  );
  
  res.clearCookie(stateKey);
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code,
      redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token,
        refresh_token = body.refresh_token;

      console.log("WE HAVE THE ACCESS TOKEN....." + access_token); // CONSOLE

      var options = {
        url: "https://api.spotify.com/v1/me",
        // url: 'https://api.spotify.com/v1/tracks',
        headers: { Authorization: "Bearer " + access_token },
        json: true,
      };

      // use the access token to access the Spotify Web API
      request.get(options, function (error, response, body) {
        console.log(body);
      });

      // we can also pass the token to the browser to make requests from there
      res.redirect(
        "/api/save-stuff" +
          combineQueries({
            access_token: access_token,
            refresh_token: refresh_token,
          })
      );
    } else {
      res.redirect(
        "/#" +
          combineQueries({
            error: "invalid_token",
          })
      );
    }
  });
  // }
});

router.get("/save-stuff", (req, res) => {
  const access_token = req.query.access_token;
  const refresh_token = req.query.refresh_token;

  res.cookie("__sg_acc_tok__", access_token);
  res.cookie("__sg_ref_tok__", refresh_token);

  res.redirect("/welcome");
});

router.get("/refresh_token", function (req, res) {
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      console.log('ACCESS TOKEN:', access_token)
      res.send({
        access_token: access_token,
      });
    }
  });
});

// ========================================================================
// ========================================================================
// ========================================================================


// ========================================================================
// =========================== AUTH FUNCTIONS =============================
// ========================================================================

router.post("/playlists", async (req, res) => {
  try {
    const url: string = req.body.id ? `https://api.spotify.com/v1/playlists/${req.body.id}` : "https://api.spotify.com/v1/me/playlists"

    const playlistFetch = await axios.get(
      url,
      {
        headers: {
          Authorization: "Bearer " + 'BQDTC03Bumw3TjOBCN59PyoFHhqcAr3JaDxzpjFUbZJvZ2OLhlEBf4ogv_qAOF-gnxBNp0QHo4yHmL6wMAhcd4nSdy85Lfv11OIurnXJeSGhvOZ_qclqKzktOH2UN53EULfEOEP5sWLz5S8sTOsBp8BiufZR5GfzuYHY82i-WOIFoTc43ACMAA',
        },
      }
    );

    console.log(playlistFetch.data);
    return res.send(playlistFetch.data);
  } catch (err) {
    console.log('ERROR', err)
    return res.send({ error: err })
  }
});

router.post("/find-song", async (req, res) => {
  try {
    const url: string = `https://api.spotify.com/v1/search${combineQueries({
        q: req.body.query,
        type: req.body.type || 'track',
    })}`

    const songFetch = await axios.get(
      url,
      {
        headers: {
          Authorization: "Bearer " + 'BQC3mEgBMgMHpHEeFz3fKK-AdRLS5nEslxZpFLN2ipI8I9vPZ1ABgq3pmMx6LNNkDOVaGf_YEpQfToj_VoXb9RQUuG58T2FNzDZYYgeWsNcbgN7izqnFx9xp1OMOxuRxuF5P1tFiCZxiOoFj4ksxoIuEg0Y5XvYIkZnPX8H21D6HEag13BPxqg',
        },
      }
    );

    console.log(songFetch.data);
    return res.send(songFetch.data);
  } catch (err) {
    console.log('ERROR', err)
    return res.send({ error: err })
  }
});

// ========================================================================
// ========================================================================
// ========================================================================

export default router;
