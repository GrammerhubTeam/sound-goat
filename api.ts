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

const combineQueries = (obj: { [x: string]: string }) => {
  return (
    "?" +
    Object.keys(obj)
      .map((v: string) => `${v}=${obj[v]}`)
      .join("&")
  );
};

router.get("/hello", function (req: any, res: any) {
  res.send("hello");
});

router.post("/contactus", function (req: any, res: any) {
  res.send("contact");
});

router.get("/spotify-login", (req, res) => {
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
  ); // CONSOLE

  // if (state === null || state !== storedState) {
  // res.redirect('/#' + combineQueries({ error: 'state_mismatch' }))
  // } else {
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

router.post("/spotify-playlists", async (req, res) => {
  // const access_token = req.cookies["__sg_acc_tok__"];
  // const refresh_token = req.cookies["__sg_ref_tok__"] // <=== not used for now

  // var options = {
  //   url: "https://api.spotify.com/v1/users/npzhxq7de1vh2rqtsnxlppeq5/playlists",
  //   // url: 'https://api.spotify.com/v1/tracks',
  //   headers: { Authorization: "Bearer " + req.body.accessToken },
  //   json: true,
  // };

  try {
    const url: string = req.body.id ? `https://api.spotify.com/v1/playlists/${req.body.id}` : "https://api.spotify.com/v1/me/playlists"

    const playlistFetch = await axios.get(
      url,
      {
        headers: {
          Authorization: "Bearer " + req.body.accessToken,
        },
      }
    );

    console.log(playlistFetch.data);
    return res.send(playlistFetch.data);
  } catch (err) {
    console.log('ERROR', err)
    return res.send({ error: err })
  }

  // use the access token to access the Spotify Web API
  // request.get(options, function (error, response, body) {
  //   console.log(body);
  //   return res.send(body);
  // });
  // axios

  // return res.redirect("/welcome");
});

export default router;
